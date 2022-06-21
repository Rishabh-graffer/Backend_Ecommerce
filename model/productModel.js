const mongoose = require("mongoose");
const id = mongoose.Schema.Types.ObjectId;

const productSchema = mongoose.Schema({
    store_id: {
    type: id,
    ref: "store",
    required:[true, "please enter store id"]
  },
  category_id: {
    type: id,
    ref: "category",
    required:[true, "please enter category id"]
  },
  subcategory_id: {
    type: id,
    ref: "category",
    required:[true, "please enter subcategory id"]
  },
  product_name: {
    type: String,
    required: [true, "please enter product name"],
  },
  product_description: {
    type: String,
    required: [true, "please enter product description"],
  },
  product_price: {
    type: Number,
    required: [true, "please enter product price"],
  },
  status: {
    type: Boolean,
    default: true,
  },
  stocks:{
    type:Number,
    default:1
  },
    timestamps: true
});

module.exports = mongoose.model("product", productSchema);
