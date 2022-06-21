const user = require("../model/userModel");

exports.registerUser= async (req,res)=>{
 
     const users = await user.create(req.body)
     console.log(users)
     res.status(200).json({
        success:true,
        message:"user registered successfully"
     })

    // const users = user.findOne({$or:[{email:req.body.email},{mobile_no:req.body.mobile_no},{googleId:req.body.email}]})
    // console.log(users)

}


exports.updateUser = async (req,res)=>{
   const {email, mobile_no, googleId} = req.body;
//  let users = await user.findOne({$or:[{email:email},{mobile_no:mobile_no},{googleId:googleId}]})
 let users = await user.findOne({$and:[{$or:[{email:email},{mobile_no:mobile_no},{googleId:googleId}]}, {role:"user"} ]})

   if(users){
      users = await user.findOneAndUpdate( {$and:[{$or:[{email:email},{mobile_no:mobile_no},{googleId:googleId}]}, {role:"user"} ]}, req.body)
       
      res.status(200).json({
         success:true,
         message:"user Updated",
         data:users
      })

   }else{
      res.status(200).json({
         success:true,
         message:"result found",
         data:users
      })
   }
}


exports.AllUsers = async(req,res)=>{
   const users = await user.find({role:"user"})

   res.status(200).json({
      success:true,
      message:"found result",
      data:users
   })
}

exports.Allvendors = async(req,res)=>{
   const users = await user.find({role:"vendor"})

   res.status(200).json({
      success:true,
      message:"found result",
      data:users
   })
}

exports.updateVendor = async (req,res)=>{
   const {email, mobile_no, googleId} = req.body;
//  let users = await user.findOne({$or:[{email:email},{mobile_no:mobile_no},{googleId:googleId}]})
 let users = await user.findOne({$and:[{$or:[{email:email},{mobile_no:mobile_no},{googleId:googleId}]}, {role:"vendor"} ]})

   if(users){
      users = await user.findOneAndUpdate( {$and:[{$or:[{email:email},{mobile_no:mobile_no},{googleId:googleId}]}, {role:"vendor"} ]}, req.body)
       
      res.status(200).json({
         success:true,
         message:"user Updated",
         data:users
      })

   }else{
      res.status(200).json({
         success:true,
         message:"result found",
         data:users
      })
   }
}