const category = require("../model/categoryModel");
const admin = require("../model/adminModel");
const adminRole = require("../middleware/adminRole")

exports.addCategory=async(req,res)=>{   
   let cat = await category.create(req.body);
  
   console.log("add category", req.body)

   res.status(200).json({
      success:true,
      message:"category added successfully",
      data:cat
   })

}

exports.getCategory=async(req,res)=>{
    let cat = await category.find();
 
    res.status(200).json({
       success:true,
       message:"found some result",
       data:cat
    })
 }

 exports.updateCategory=async(req,res)=>{
   const {id} = req.params

    let cat = await category.findById(id);
    
    if(cat){
      cat = await category.findByIdAndUpdate(id,req.body)

      res.status(200).json({
         success:true,
         message:"updated successfully",
      })
    }else{

    res.status(404).json({
       success:true,
       message:"no result found",
       data:cat
    })
   }
 }

 exports.deleteCategory=async(req,res)=>{
   const {id} = req.params;
   let cat = await category.findById(id);

   if(cat){

      cat = await category.findByIdAndDelete(id)

      res.status(200).json({
         success:true,
         message:`${cat.category_name} category deleted successfully`,
      })
   }else{
      res.status(404).json({
         success:true,
         message:"no such category exist",
         data:cat
      })
   }

  
}
