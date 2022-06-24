const product = require("../model/productModel");

exports.addProduct = async(req,res)=>{
    console.log(req.body)
    const products = await product.create(req.body);
   try{
    res.send(200).json({
        success:true,
        message:"product added successfully",
        data:products
    })
}catch(err){
  console.log(err)
  res.status(400).json({
    success:false,
    message:"something wrong"
  })
}
}

exports.updateProduct = async(req,res)=>{
    const {store_id,id} = req.params
    let products = await product.findOne({$and:[{store_id:store_id},{_id:id}]})
    if(products){
       products = await product.findOneAndUpdate({$and:[{store_id:store_id},{_id:id}]}, req.body)
       
       res.status(200).json({
        success:true,
        message:"product updated successfully"
       })
    }else{
      res.status(404).json({
        success:false,
        message:"no such product found"
       })
    }
}

exports.deleteProduct = async(req,res)=>{
  const {store_id,id} = req.params
  let products = await product.findOne({$and:[{store_id:store_id},{_id:id}]})
  if(products){
     products = await product.findOneAndDelete({$and:[{store_id:store_id},{_id:id}]})
     
     res.status(200).json({
      success:true,
      message:"product deleted successfully"
     })
  }else{
    res.status(404).json({
      success:false,
      message:"no such product found"
     })
  }
}

exports.findAllProduct=async(req,res)=>{
const product = await products.find();

res.status(200).json({
  success:true,
  message:"found result",
  data:product
})
}

exports.productsBySubcategory=async(req,res)=>{
  const {id} = req.query
 const products = await product.findById(id)

 if(products){
   res.status(200).json({
     success:true,
     message:"result found successfully",
     data: product
   })
 }
}