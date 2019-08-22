const mongoose = require('mongoose');
// const db = "mongodb://admin:123456@mongodb.dev:27017/page";
const db = "mongodb://mongodb.dev:27017/page";
const glob = require('glob'); // 引入glob模块是为了解决全局使用 * 通配符的问题，glob模块允许使用 * 号作为全局通配符
const { resolve } = require('path'); // 引入resolve 模块是为了将一系列路径或路径段解析为绝对路径。

mongoose.Promise = global.Promise;

// 优雅地将所有schema映射模型一次性全部引入
exports.initSchemas = () => {
    console.log('--------> schema')
    glob.sync(resolve(__dirname, './schema/', '**/*.js')).forEach(require);
}

exports.connectDB = () => {
    // 连接数据库
    mongoose.connect(db);

    // 设置最大连接次数，若超过此数则不再连接，直接抛出异常
    let maxConnectTimes = 0

    return new Promise((resolve, reject) => {
        // 增加数据库链接的监听事件

        // 断开连接事件监听
        mongoose.connection.on('disconnected', () => {
            // 若小于最大连接次数，进行重新连接
            console.log('*********************数据库断开连接************************');
            if (maxConnectTimes<3) {
                maxConnectTimes++;
                mongoose.connect(db);
            }else{
                reject();
                throw new Error('*********************数据库出现问题，请人工维修!*********************');
            }
        })

        // 数据库出现错误触发事件
        mongoose.connection.on('error', (err) => {
            // 若小于最大连接次数，进行重新连接
            if (maxConnectTimes < 3){
                maxConnectTimes++;
                mongoose.connect(db);
            }else{
                reject(err);
                throw new Error('*********************数据库出现问题，请人工维修!*********************');
            }
        })

        // 成功连接事件
        mongoose.connection.once('open', () => {
            console.log('MongoDB connected successfully!')
            resolve();
        })
    })
}