const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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
    },
    gender:{
        type:String,
        // required:[true, "please select your gender"]
    },
    email:{
        type:String,
        // required:[true, "please enter email address"],
        unique:true,
        immutable:true,
        required:false
    },
    googleId:{
        type:String,
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

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})


module.exports = mongoose.model("user", userSchema)