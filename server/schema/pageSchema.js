const mongoose = require('mongoose'); // 引入mongoose
const Schema = mongoose.Schema; // 声明Schema

const pageSchema = new Schema({
  id:{unique:true,type:String},
  title:String,
  user_id:Number,
  views:Array,
  child:Array
})

mongoose.model('Page', pageSchema, 'Page');