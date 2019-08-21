// 引入 node 自带的文件处理模块
const fs = require('fs');

fs.readFile('./dataBak/goods.json', 'utf8', function(err, data){
  let readData = JSON.parse(data);
  let pushData = [];
  readData.RECORDS.map(function(value, index){
    if(value.IMAGE1!=null){
      pushData.push(value);
    }
  })
  console.log(pushData);

  fs.writeFile('./datBak/newGoods.json', JSON.stringify(pushData), function(err){
    err && console.log('写文件操作失败');
    !err && console.log('写文件操作成功');
  })
})