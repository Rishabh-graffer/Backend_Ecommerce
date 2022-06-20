const express = require("express");
const { addSubCategory, getSubCategory, updateSubCategory, deleteSubCategory } = require("../controller/subcategoryController");
const adminRole = require("../middleware/adminRole");

const router = express.Router();

router.route("/addsubcategory").post(adminRole, addSubCategory)
router.route("/getallsubcategory").get(adminRole, getSubCategory)
router.route("/updatesubcategory").put(adminRole, updateSubCategory)
router.route("/deletesubcategory").delete(adminRole, deleteSubCategory)

module.exports = router;
