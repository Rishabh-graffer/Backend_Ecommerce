const user = require("../model/userModel");
const accountSid = 'AC6cc61552253645cf39827a6f1edd52a7'; 
const authToken = '602d8c9e5c17b2881305fb90c54a1b9c'; 
const client = require('twilio')(accountSid, authToken); 
const otpGenerator = require('otp-generator')



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

exports.loginUser = async(req,res)=>{
   const otp = otpGenerator.generate(6, { upperCaseAlphabets: false,lowerCaseAlphabets:false, specialChars: false });
   console.log(req.body)
   client.messages 
      .create({         
         body: 'Hello from Rishabh',
         from: '+19854972822',
         to: '+917509699668' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();
}

exports.otpLogin= async (req,res)=>{
   const {mobile_no} = req.body
const mobile = await user.findOne({mobile_no:req.body.mobile_no})
if(mobile){
   const otp = otpGenerator.generate(6, { upperCaseAlphabets: false,lowerCaseAlphabets:false, specialChars: false });
   console.log("otp code =>", otp)
}else{
   const otp = otpGenerator.generate(6, { upperCaseAlphabets: false,lowerCaseAlphabets:false, specialChars: false });
   const users = await user.create({mobile_no:mobile_no, otp:otp})
   console.log("otp code =>", otp, users)
}
console.log("mobile", mobile)
}

// ----------------------------------------------------------

 

// ----------------------------------------------------------