const mongoose = require("mongoose")

const storeSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    store_name:{
        type:String,
        required:[true, "please enter store name"]
    },
    logo:{
        type:String,
        required:[true, "please provide your logo"]
    },
    State:{
        type:String,
        required:[true, "please select state"]
    },
    city:{
        type:String,
        required:[tru, "please select city"]
    },
    address_line_1:{
        type:String,
        required:[true, "please provide your address line 1"]
    },
    address_line_2:{
        type:String,
        required:[true, "please provide your address line 2"]
    },
    landmark:{
        type:String,
        required:[true, "please provide your landmark"]
    },
    geo_cordinates:{
       latitude:{type:String, required:[true, "please enter latitude"]},
       longitude:{type:String, required:[true, "please enter longitude"]}
    },
    phone_no:{
        type:String,
        required:[true, "please enter your mobile number"]
    },
    zip_code:{
        type:String,
        required:[true, "please provide your location"]
    },
    status:{
        type:Boolean,
        default:false
    },
    createdAt:{timestamps:true},
    updatedAt:Date
})

module.exports = mongoose.model("store", storeSchema)
