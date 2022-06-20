const app = require("./app");
const connectDatabase = require("./config/connectDatabase");

connectDatabase();

app.listen(4000, ()=>{
    console.log("listening on port 4000")
})
