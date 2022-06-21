const express = require("express");
const category = require("./routes/categoryRoute")
const subcategory = require("./routes/subcategoryRoute")
const admin = require("./routes/adminRoute")
const user = require("./routes/userRoute")

const app = express();
app.use(express.json());

app.use("/api/", category, subcategory, admin, user );


module.exports = app;