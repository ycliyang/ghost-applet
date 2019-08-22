const mongoose = require('mongoose'); // 引入mongoose
const Schema = mongoose.Schema; // 声明Schema

const viewSchema = new Schema({
  id:{unique:true,type:String},
  title:String,
  userId:Number,
  nodeName:String,
  className:String,
  style:JSON,
  child:Array
})

mongoose.model('View', viewSchema, 'View');