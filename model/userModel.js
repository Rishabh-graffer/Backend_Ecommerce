const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    first_name:{
        type:String,
        required:[true, "please enter First Name"]
    },
    last_name:{
        type:String,
        required:[true, "please enter Last Name"]
    },
    mobile_no:{
        type:Number,
        required:[true, "please enter mobile number"],
        unique:true
    },
    gender:{
        type:string,
        required:[true, "please select your gender"]
    },
    email:{
        type:String,
        required:[true, "please enter email address"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "please enter password"],
        select:false
    },
    age:{
        type:Number,
        required:[true, "please enter your age"]
    },
    profile_pic:{
        type:String,
    },
    status:{
        type:Boolean,
        default:false,
        select:false
    },
    role_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"role"
    },
    otp:{
        type:Number,
        select:false
    },
    createdAt:{timestamps:true},
    updatedAt:Date
})

