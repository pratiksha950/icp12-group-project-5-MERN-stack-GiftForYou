import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  productId: String,
  userId: String,
  name: String,
  price: Number,
  quantity: Number,
  description: String,
  productImage: String,
  customImage: String,
  totalAmount: Number,
}, { timestamps: true });

export default mongoose.model("Cart", cartSchema);