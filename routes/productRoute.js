const express = require("express");
const { addProduct } = require("../controller/productController");

const router = express.Router();

router.route("/addproduct").post(addProduct)

module.exports = router;