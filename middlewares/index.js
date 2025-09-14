
const { verify } = require("jsonwebtoken");
const JWT_SECRET = require("../config.js");

const authMiddleware = (req,res,next) =>{
    const authHeader = req.headers.authorization;
    // console.log(authHeader)
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(403).json({
            Message:"invalid user"
        })
    }
    const token = authHeader.split(' ')[1];
    // console.log("got the token successfully")
    // console.log(token)

    // verify the token 
    try{
        
        // console.log("to verify")
        const decode = verify(token,JWT_SECRET)
        // console.log(decode)
        if(decode.userId){
            req.userId = decode.userId;
            next();
        }
        else{
            res.status(403).json({
                Message:"invalid user"
            })
        }
    }
    catch(err){
        res.status(403).json({
            Message:"invalid user"
        })
    }
}

module.exports = {
    authMiddleware,
}