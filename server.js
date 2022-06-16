const app = require("./app");
const express = require("express");
const connectDatabase = require("./config/connectDatabase");



connectDatabase();



app.listen(4000, ()=>{
    console.log("listening on port 4000")
})
