import express from "express";
import dotenv from "dotenv"
import cors from "cors"; 
import connectDB from "./db.js";
import User from "./models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";  
import Gift from "./models/gift.js";

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

const checkJWT=(req,res,next)=>{
    const {authorization}=req.headers;
    const token=authorization && authorization.split(" ")[1];
    console.log("Token",token);

    try{
    const decodedToken=jwt.verify(token,process.env.JWT_SECRET);
    req.user = decodedToken;
    next();
    }catch(e){
        return res.json({
            success:false,
            message:"invalid or missing token",
            data:null
        })
    }
}

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

const salt = bcrypt.genSaltSync(10);
const encryptedPassword  = bcrypt.hashSync(password, salt);


    const newUser=new User({
        name,
        email,
        mobile,
        city,
        country,
         password:encryptedPassword
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

      const existingUser=await User.findOne({email });

     if(!existingUser){
        return res.json({
            success:false,
            message:"user doesn`t exist with this email,please sign Up",
            data:null
        })
     }

     const isPasswordCorrect=bcrypt.compareSync(password,existingUser.password);

     existingUser.password=undefined;

     if(isPasswordCorrect){
         const jwttoken = jwt.sign(
       {
         id: existingUser._id,
         email: existingUser.email,
       },
       process.env.JWT_SECRET,
       {
         expiresIn: "1h",
       }
     );
     
            return res.json({
            success:true,
            message:"login successfully",
              token: jwttoken,
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

app.post("/gifts",checkJWT, async (req, res) => {
  const {
    title,
    description,
    category,
    productType,
    basePrice,
    images,
    mockupImage,
    customizable,
  } = req.body;

  const newGift = new Gift({
    title,
    description,
    category,
    productType,
    basePrice,
    images,
    mockupImage,
    customizable,
    createdBy: req.user.id
  });

  try {
    const savedGift = await newGift.save();

    return res.status(201).json({
      success: true,
      message: "Gift created successfully",
      data: savedGift
    });

  } catch (e) {
    return res.status(500).json({
      success: false,
      message: `Gift creation failed: ${e.message}`,
      data: null
    });
  }
});

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    connectDB();
})