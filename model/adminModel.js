const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    admin_name:{
        type:String,
        required:[true, "please enter admin name"]
    },
    admin_email:{
        type:String,
        required:[true, "please enter admin email"]
    },
    password:{
        type:String,
        required:[true, "please enter password"]
    },
    role:{
        type:String,
        default:"admin"
    }
})

module.exports = mongoose.model("admin", adminSchema);