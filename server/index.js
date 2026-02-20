import express from "express";
import dotenv from "dotenv"
import cors from "cors"; 
import connectDB from "./db.js";
import {checkJWT} from "./middleware/jwt.js";
import { postSignUp,postLogin } from "./controllers/auth.js";
import {getHome,getHealth} from "./controllers/health.js";
import { updateUser } from "./controllers/auth.js";
import ImageKit from "@imagekit/nodejs";
import { addReview, deleteReview, getReview, updateReview } from "./controllers/review.js";

dotenv.config();

const app=express();
app.use(express.json());
app.use(cors());

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

const PORT=8080;


app.get("/health",getHealth) 
app.get("/",getHome) 

app.get('/auth', function (req, res) {
  const { token, expire, signature } = client.helper.getAuthenticationParameters();
  res.send({ token, expire, signature, publicKey: process.env.IMAGEKIT_PUBLIC_KEY });
});

app.post("/Signup",postSignUp)
app.post("/login",postLogin)

app.put("/profile", checkJWT, updateUser);

app.post("/reviews", addReview);
app.put("/reviews/:id", updateReview)
app.delete("/reviews/:id", deleteReview)
app.get("/reviews", getReview);


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    connectDB();
})