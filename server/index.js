import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db.js";
import { checkJWT } from "./middleware/jwt.js";
import { postSignUp, postLogin, updateUser } from "./controllers/auth.js";
import { getHome, getHealth } from "./controllers/health.js";
import ImageKit from "imagekit";
import { addReview, updateReview, deleteReview, getReview } from "./controllers/review.js";
import { addToCartController, getCartController } from "./controllers/cart.js";
import { createSuggestion } from "./controllers/suggestion.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

const client = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

const PORT = process.env.PORT || 8080;

app.get("/health", getHealth);
app.get("/", getHome);

app.get('/auth', function (req, res) {
  const { token, expire, signature } = client.helper.getAuthenticationParameters();
  res.send({ token, expire, signature, publicKey: process.env.IMAGEKIT_PUBLIC_KEY });
});

app.post("/Signup", postSignUp);
app.post("/login", postLogin);
app.put("/profile", checkJWT, updateUser);

app.post("/reviews", addReview);
app.put("/reviews/:id", updateReview);
app.delete("/reviews/:id", deleteReview);
app.get("/reviews", getReview);

app.post("/cart", addToCartController);
app.get("/cart", getCartController);

app.post("/suggestion", createSuggestion);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});