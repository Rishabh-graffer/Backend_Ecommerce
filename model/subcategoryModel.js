
const mongoose = require("mongoose");

const subcategorySchema = mongoose.Schema({
    category_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category",
        required:[true, "Please select category"]  
    },
    subcategory_name:{
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

module.exports = mongoose.model("subcategory", subcategorySchema);
