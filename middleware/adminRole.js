const jwt = require("jsonwebtoken")
const admin = require("../model/adminModel");


const adminRole = async (req,res,next)=>{
  const namee =  await jwt.verify(req.headers.token, 'Rishabh', async function (err, decoded) {
    if(err){
      res.status(403).json({
        message:"please login again"
      })
    }
        const id = decoded.id
        const admins = await admin.findById(id)
        return admins
    });
    
  
    if(namee.role=="admin"){
      next();
    }else{
      res.status(403).json({
        success:false,
        message:"unauthorized user"
      })
    }
}

module.exports = adminRole