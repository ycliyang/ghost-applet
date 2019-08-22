const mongoose = require('mongoose');
const Router = require('koa-router');
const fs = require('fs');
let router = new Router();

// 批量导入商品详情信息
router.get('/insertAll', async(ctx)=>{
  fs.readFile('./dataBak/newGoods.json', 'utf8', (err, data)=>{
    let readData = JSON.parse(data);
    let saveCount = 0;
    const Goods = mongoose.model('Goods');
    readData.map((value, index)=>{
      let newGoods = new Goods(value);
      newGoods.save()
        .then(()=>{
          saveCount++;
          console.log('成功'+ saveCount);
        })
        .catch((err)=>{
          console.log('失败'+ err);
        })
    })
  })
  ctx.body = '开始导入商品详情数据!';
})

// 批量导入商品一级分类信息
router.get('/insertAllCategory', async(ctx)=>{
  fs.readFile('./data_json/category.json', 'utf8', (err, data)=>{
    let readData = JSON.parse(data);
    let saveCount = 0;
    const Category = mongoose.model('Category');

    readData.RECORDS.map((value, index)=>{
      let newCategory = new Category(value);
      newCategory.save()
        .then(()=>{
          saveCount++;
          console.log('成功'+ saveCount);
        })
        .catch((err)=>{
          console.log('失败'+ err)
        })
    })
  })
  ctx.body = "开始导入分类数据!";
})

// 批量导入商品二级分类信息
router.get('/insertAllCategorySub', async(ctx)=>{
  fs.readFile('./data_json/category_sub.json', 'utf8', (err, data)=>{
    let readData = JSON.parse(data);
    let saveCount = 0;
    const CategorySub = mongoose.model('CategorySub');
    readData.RECORDS.map((value, index)=>{
      let newCategorySub = new CategorySub(value);
      newCategorySub.save()
        .then(()=>{
          saveCount++;
          console.log('成功' + saveCount);
        })
        .catch((err)=>{
          console.log('失败'+ err);
        })
    })
  })
  ctx.body = '开始导入二级分类数据!';
})

// 获取商品详细信息接口
router.post('/getDetailGoodsInfo', async(ctx)=>{
  try{
    let goodsId = ctx.request.body.goodsId;
    const Goods = mongoose.model('Goods');
    let result = await Goods.findOne({'ID':goodsId}).exec();
    ctx.body = {
      code: 200,
      message: result
    }
  }
  catch(err){
    ctx.body = {
      code: 500,
      message: err
    }
  }
})

// 读取商品一级分类数据接口
router.get('/getCategoryList', async(ctx)=>{
  try{
    const Category = mongoose.model('Category');
    let result = await Category.find().exec();
    ctx.body = {
      code: 200,
      message: result
    }
  }
  catch(err){
    ctx.body = {
      code: 500,
      message: err
    }
  }
})

// 读取商品二级分类数据接口
router.get('/getCategorySubList', async(ctx)=>{
  try{
    let categoryId = ctx.request.query.id;
    const CategorySub = mongoose.model('CategorySub');
    let result = await CategorySub.find({MALL_CATEGORY_ID:Number(categoryId)}).exec();
    ctx.body = {
      code: 200,
      message: result
    }
  }
  catch(err){
    ctx.body = {
      code: 500,
      message: err
    }
  }
})

// 根据商品二级分类ID获取对应商品详情
router.get('/getGoodsListByCategorySubId', async(ctx)=>{
  try{
    let id = ctx.request.query.id; // 获取二级分类的Id
    let curPage = ctx.request.query.curPage; // 获取当前页码
    let pageNum = ctx.request.query.pageNum; // 获取每页显示几条（也是limit方法的限制条件）
    let start = (Number(curPage) - 1) * Number(pageNum); // 计算经过skip跳过方法后，从数据库表里的哪一项开始查询

    // *******制作分页********

    const Goods = mongoose.model('Goods');
    // 首先查询出符合条件的所有的商品
    let totalItems = await Goods.find({SUB_ID:String(id)}).exec();
    // 计算总条数
    let totalCount = totalItems.length;
    // 然后在当前限制条件下查询出当前页的所有商品
    let result = await Goods.find({SUB_ID:String(id)}).skip(Number(start)).limit(Number(pageNum)).exec();

    ctx.body = {
      code: 200,
      message: result,
      count: totalCount
    }
  }catch(err){
    ctx.body = {
      code: 500,
      message: err
    }
  }
})

module.exports = router;