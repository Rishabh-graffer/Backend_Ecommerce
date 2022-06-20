const admin = require('../model/adminModel');
const generateToken = require('../utils/generateToken');

exports.adminLogin = async (req,res)=>{
    const {admin_email, password} = req.body;
 
    const adm = await admin.findOne({admin_email})
    console.log("admin", generateToken("id", "Rishabh", "5d"))
    if(adm){
    if(adm.password == password){
        req.user = adm
        res.status(200).json({
            success:true,
            message:"logged in sucessfull",
            data:generateToken(adm._id, "Rishabh", "5d")
        })
    }
}else{
    res.status(404).json({
        success:false,
        message:"no user found",
    })
}
}

