const mongoose = require("mongoose");

const connectDatabase=()=>{

    mongoose.connect("mongodb://localhost:27017/weckOff").then(res=>{
        console.log("database connected on port ", res.connections[0].port)
    })
}

module.exports = connectDatabase;