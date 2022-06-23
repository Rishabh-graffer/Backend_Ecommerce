const jwt = require("jsonwebtoken")
const user = require("../model/userModel");


const vendorRole = async (req,res,next)=>{
  const namee =  await jwt.verify(req.headers.token, 'Rishabh', async function (err, decoded) {
    if(err){
      res.status(403).json({
        message:"please login again"
      })
    }
        const id = decoded.id
        const users = await user.findById(id)
        return users
    });
    
  
    if(namee.role=="vendor"){
      next();
    }else{
      res.status(403).json({
        success:false,
        message:"unauthorized user"
      })
    }
}

module.exports = vendorRole