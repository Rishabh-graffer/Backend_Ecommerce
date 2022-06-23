const express = require("express");
const { addStore, vendorStore, updateStore, deleteStore, findAllStore } = require("../controller/storeController");
const vendorRole = require("../middleware/vendorRole")

const router = express.Router();

router.route("/addstore").post(vendorRole, addStore);
router.route("/getvendortores/:id").get(vendorRole, vendorStore);
router.route("/updatestore").put(vendorRole, updateStore);
router.route("/deletestore").put(vendorRole, deleteStore);
router.route("/allstores").get(findAllStore);


module.exports = router;