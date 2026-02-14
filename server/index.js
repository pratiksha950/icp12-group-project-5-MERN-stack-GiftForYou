import express from "express";
import dotenv from "dotenv"
import cors from "cors"; 
import connectDB from "./db.js";
import Gift from "./models/gift.js";
import {checkJWT} from "./middleware/jwt.js";
import { postSignUp,postLogin } from "./controllers/auth.js";
import {getHome,getHealth} from "./controllers/health.js";
import { getGifts } from "./controllers/gift.js";


const app=express();
app.use(express.json());
app.use(cors());

const PORT=8080;


app.get("/health",getHealth) 
app.get("/",getHome) 



app.post("/Signup",postSignUp)
app.post("/login",postLogin)

app.post("/gifts",checkJWT,getGifts);

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    connectDB();
})