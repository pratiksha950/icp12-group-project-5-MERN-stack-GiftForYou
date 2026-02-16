import express from "express";
import dotenv from "dotenv"
import cors from "cors"; 
import connectDB from "./db.js";
import {checkJWT} from "./middleware/jwt.js";
import { postSignUp,postLogin } from "./controllers/auth.js";
import {getHome,getHealth} from "./controllers/health.js";
import { updateUser } from "./controllers/auth.js";


const app=express();
app.use(express.json());
app.use(cors());

const PORT=8080;


app.get("/health",getHealth) 
app.get("/",getHome) 



app.post("/Signup",postSignUp)
app.post("/login",postLogin)

app.put("/profile", checkJWT, updateUser);


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    connectDB();
})