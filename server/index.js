import express from "express";
import dotenv from "dotenv"
import cors from "cors"; 
import connectDB from "./db.js";

dotenv.config();

const app=express();
app.use(express.json());
app.use(cors());



const PORT=8080;

//health Routes
app.get("/",(req,res)=>{
    console.log("welcome to server");
}) 


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    connectDB();
})