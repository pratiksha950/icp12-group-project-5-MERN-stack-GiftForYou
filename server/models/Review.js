// models/Review.js
import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true
  }
}, { timestamps: true });

export default mongoose.model("Review", reviewSchema);