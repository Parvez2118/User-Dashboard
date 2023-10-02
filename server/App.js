const mongoose=require('mongoose');
const express = require('express') ;
const app=express();
const jwt= require("jsonwebtoken");
const DB='mongodb+srv://redskull:redskull2118@cluster0.ti3awfp.mongodb.net/Profile?retryWrites=true&w=majority'; mongoose.connect(DB,{ useNewUrlParser:true, useUnifiedTopology:true }).then(()=>{ console.log(`Connected to DB`); }).catch((err)=>{ console.log(err); })
const User=require('./User');
const authenticate= require('./authenticate');
const bcrypt=require('bcrypt');
const cookieParser = require('cookie-parser')
const cors=require('cors');
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:3000', 
    credentials: true, 
  };
app.use(cors(corsOptions));


    app.post("/register",(req,res)=>{ 
        const {name,email,password,phonenumber,job}=req.body; 
       
        if(!name || !email || !password || !phonenumber || !job)
         {
         return res.status(400).json({error:"Please fill field"});
         }
         User.findOne({email:email}).then((userexists)=>{ 
        if(userexists) { 
        return res.status(404).json({err:"email already exists"}); 
        }
         const user=new User({name,email,password,phonenumber,job});///passing data to the schema and then send to nongodb
         user.save().then(()=>{ 
        return res.status(200).json({Message:req.body});
         }).catch((err)=>{ return res.status(500).json({err:"failed to register"}); });
        }).catch((err)=>{ console.log(err); }) });

        



 app.post("/login",async (req,res)=>
    {
     try{ 
let token;
        const {email,password}=req.body; 
        if(!email || !password) {
            console.log("Please fill field");
            return res.status(400).json({error:"Please fill field"});
        }
         const userLogin= await User.findOne({email :email});
         if(userLogin)
         {
            const isMatch= await bcrypt.compare(password ,userLogin.password);
            token= await userLogin.generateAuthToken();
            res.cookie("jwt" ,token ,{
                expires :new Date(Date.now() +25892000000),
                httpOnly:true
            });

            if(!isMatch)
            {
                console.log("Invalid password");
               return res.status(422).json({error:"Invalid password"});
            }
            else
            {
                console.log("Logged in");
              return res.json({message:"Logged in"});
            }
           
         }
         else
         {
            console.log("Invalid email");
            return res.status(422).json({error:"Invalid email"});
         }
       
    }
    catch(err){
          console.log(err);
    }
    });

    app.get('/abc',authenticate, async(req,res)=>{
        res.send(req.rootUser);
    })
  
    app.listen(8000);
         