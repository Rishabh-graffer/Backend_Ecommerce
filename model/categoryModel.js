
const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    category_name:{
        type:String,
        required:[true, "please enter category name"]
    },
    status:{
        type:Boolean,
        default:true,
        select:false
    },
    createdAt:{
        type:Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("category", categorySchema);
