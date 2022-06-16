const express = require("express");
const { adminLogin, adminSignup } = require("../controller/adminController");
const router = express.Router();

router.route("/adminlogin").post(adminLogin)

module.exports = router;