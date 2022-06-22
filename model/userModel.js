const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    first_name:{
        type:String,
        // required:[true, "please enter First Name"]
    },
    last_name:{
        type:String,
        // required:[true, "please enter Last Name"]
    },
    mobile_no:{
        type:String,
        required:[true, "please enter mobile number"],
        unique:true,
        immutable:true
    },
    gender:{
        type:String,
        // required:[true, "please select your gender"]
    },
    email:{
        type:String,
        // required:[true, "please enter email address"],
        unique:true,
        immutable:true
    },
    googleId:{
        type:String,
        unique:true,
        immutable:true
    },
    password:{
        type:String,
        // required:[true, "please enter password"],
        select:false
    },
    age:{
        type:Number,
        // required:[true, "please enter your age"]
    },
    profile_pic:{
        type:String,
    },
    status:{
        type:Boolean,
        default:false,
        select:false
    },
    role:{
        type:String ,
        immutable:true
    },
    otp:{
        type:Number,
        select:false
    },
    // createdAt:{timestamp : true},
    updatedAt:Date
})

module.exports = mongoose.model("user", userSchema)