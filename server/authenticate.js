const jwt= require("jsonwebtoken");

const User=require('./User');


const Authenticate =async (req,res,next) =>{
    try{

        const token = req.cookies.jwt;
        const verifyToken=jwt.verify(token ,"MYNAMEISLEAVEMANAGEMENTSYSTEMAPPLICATIONAUTHENTICATION");

        const rootUser= await User.findOne({_id:verifyToken._id, "tokens.token":token});

        if(!rootUser)
        {
            throw new Error("User Not found");
        }

        req.token=token;
        req.rootUser=rootUser;
        console.log(req.rootUser);
        req.userID=rootUser._id;
        next();
    }
    catch(err)
    {
        res.status(401).send("Unauthorised Token");
        console.log(err);
    }
}
module.exports=Authenticate;