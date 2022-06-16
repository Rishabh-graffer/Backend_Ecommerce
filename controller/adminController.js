const admin = require('../model/adminModel')

exports.adminLogin = async (req,res)=>{
    const {admin_email, password} = req.body;
 
    const adm = await admin.findOne({admin_email})
    console.log("admin", adm)
    if(adm){
    if(adm.password == password){
        res.status(200).json({
            success:true,
            message:"logged in sucessfull",
            data:adm
        })
    }
}else{
    res.status(404).json({
        success:false,
        message:"no user found",
    })
}
}