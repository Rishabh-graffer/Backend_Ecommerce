const store = require("../model/storeModel")

exports.addStore= async (req,res)=>{
 const stores = await store.create(req.body)

 if(stores){
 res.status(200).json({
    success:true,
    message:"Store added successfully",
    data:stores
 })
}else{
    res.status(500).json({
        success:false,
        message:"some internal error"
     })
}
}

exports.vendorStore = async(req,res)=>{
    const {id} = req.params;
  const stores = await store.find({"user_id":id})
  res.status(200).json({
    success:true,
    message:"found all stores",
    data:stores
 })
}

exports.updateStore = async(req,res)=>{
    const {user_id, id} = req.query;
  let stores = await store.findById(id)
  if(stores){
   stores = await store.findOneAndUpdate({$and:[{"user_id":user_id},{"_id":id}]}, req.body)
   res.status(200).json({
    success:true,
    message:"store updated successfully",
    data:stores
 })
  }else{
  res.status(200).json({
    success:true,
    message:"found all stores",
    data:stores
 })
}
}

exports.deleteStore = async(req,res)=>{
   const {user_id, id} = req.query;
 let stores = await store.findById(id)
 if(stores){
  stores = await store.findOneAndDelete({$and:[{"user_id":user_id},{"_id":id}]}, req.body)
  res.status(200).json({
   success:true,
   message:"store deleted successfully",
   data:stores
})
 }else{
 res.status(200).json({
   success:true,
   message:"found all stores",
   data:stores
})
}
}

exports.findAllStore = async(req,res)=>{
   const stores = await store.find()
    if(stores){
      res.status(200).json({
         suucess:true,
         message:"found result",
         data:stores
      })
    }else{
      res.status(404).json({
         suucess:false,
         message:"No found result",
      })
    }
   
}