const subcategory = require("../model/subcategoryModel");

exports.addSubCategory=async(req,res)=>{
   let cat = await subcategory.create(req.body);

   res.status(200).json({
      success:true,
      message:"category added successfully",
      data:cat
   })
}

exports.getSubCategory=async(req,res)=>{
   const {id} = req.query
    let cat = await subcategory.find({id});
    res.status(200).json({
       success:true,
       message:"found some result",
       data:cat
    })
 }

 exports.updateSubCategory=async(req,res)=>{
   const {id} = req.query
    let cat = await subcategory.findById(id);
   
    if(cat){
      cat = await subcategory.findByIdAndUpdate(id, req.body)

      res.status(200).json({
         success:true,
         message:"updated successfully",
         data:cat
      })
    }else{

    res.status(404).json({
       success:false,
       message:"No result found"
    })
   }

 }

 exports.deleteSubCategory=async(req,res)=>{
   const {id} = req.query
    let cat = await subcategory.findById(id);

    if(cat){
      cat = await subcategory.findByIdAndDelete(id)

      res.status(200).json({
         success:true,
         message:"updated successfully",
         data:cat
      })
    }else{
    res.status(404).json({
       success:false,
       message:"No result found"
    })
   }
    
 }