import express from "express";
import dotenv from "dotenv"
import cors from "cors"; 
import connectDB from "./db.js";
import User from "./models/user.js";

dotenv.config();

const app=express();
app.use(express.json());
app.use(cors());

const PORT=8080;

//health Routes
app.get("/",(req,res)=>{
    console.log("welcome to server");
    res.send("welcome to server");
}) 

app.get("/health",(req,res)=>{
     res.send("welcome to server");
}) 

app.post("/signUp",async (req,res)=>{
    const {name,email,mobile,city,country,password}=req.body;

    if(!name){
        return  res.json({
            success:false,
            message:"name is required",
            data:null,
        })
    }
    
        if(!email){
        return  res.json({
            success:false,
            message:"email is required",
            data:null,
        })
    }

        if(!password){
        return  res.json({
            success:false,
            message:"password is required",
            data:null,
        })
    }
    const existingUser=await User.findOne({email:email});

    if(existingUser){
        return res.json({
            success:false,
            message:"user with this email already exists",
            data:null,
        })
    }

    const newUser=new User({
        name,
        email,
        mobile,
        city,
        country,
        password
    })
    try{
        const savedUser=await newUser.save();
        return res.json({
            success:true,
            data:savedUser,
            message:"User register successfully"
        })
    }catch(e){
       return res.json({
            success:false,
            message:`User register failed ${e.message}`,
            data:null 
        })
    }
})


app.post("/login",async (req,res)=>{
    const {email,password}=req.body;

    if(!email){
        return res.json({
            success:false,
            message:"email is required",
            data:null,
        })
    }

            if(!password){
        return  res.json({
            success:false,
            message:"password is required",
            data:null,
        })
    }

     const existingUser=await User.findOne({email ,password}).select("-password");

     if(existingUser){
                return res.json({
            success:true,
            message:"login successfully",
            data:existingUser
        })
     }else{
        return res.json({
            success:false,
            message:"invalid username and password",
            data:null,
        })
     }

})

app.post("/gift",(req,res)=>{
    res.send("gift route");
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    connectDB();
})