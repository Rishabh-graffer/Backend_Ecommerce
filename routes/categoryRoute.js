const express = require("express");
const { addCategory, getCategory, updateCategory, deleteCategory } = require("../controller/categoryController");
const adminRole = require("../middleware/adminRole");

const router = express.Router();

// Route::(z)

router.route("/addcategory").post(adminRole, addCategory)
router.route("/allcategory").get(adminRole,getCategory)
router.route("/updatecategory/:id").put(adminRole,updateCategory)
router.route("/deletecategory/:id").delete(adminRole,deleteCategory)

module.exports = router;
