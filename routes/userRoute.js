const express = require("express");
const { registerUser, updateUser, AllUsers, Allvendors, loginUser, otpLogin } = require("../controller/userController");
const adminRole = require("../middleware/adminRole");
const vendorRole = require("../middleware/vendorRole");

const router = express.Router();

router.route("/signup").post(registerUser)
router.route("/otplogin").post(otpLogin)
router.route("/login").post(loginUser)
router.route("/updateuser").post(updateUser)    
router.route("/getallusers").get(AllUsers)  
router.route("/getallvendors").get(adminRole, Allvendors)   

module.exports = router