 const jwt = require("jsonwebtoken")
 
 const generateToken=(id,secret,exp)=> {
   return jwt.sign({id},secret, { expiresIn:exp })
}

module.exports = generateToken