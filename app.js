const express = require("express");
const category = require("./routes/categoryRoute")
const subcategory = require("./routes/subcategoryRoute")
const admin = require("./routes/adminRoute")
const user = require("./routes/userRoute")
const store = require("./routes/storeRoute")
const product = require("./routes/productRoute");
const errorMiddleware = require("./middleware/error");

const app = express();
app.use(express.json());

app.use(errorMiddleware)
app.use("/api/", category, subcategory, admin, user, store, product );

module.exports = app;