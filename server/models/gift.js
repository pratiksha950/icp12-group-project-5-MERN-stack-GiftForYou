import { Schema, model } from "mongoose";

const GiftSchema = new Schema({

  title: {
    type: String,
    required: true,
    trim: true
  },

  description: {
    type: String,
    required: true
  },

  category: {
    type: String,
    enum: [
      "Birthday",
      "Anniversary",
      "Wedding",
      "Festival",
      "Flower & Cake",
      "Special Occasion"
    ],
    required: true
  },

  productType: {
    type: String,
    enum: ["Tshirt", "Mug", "Frame", "MobileCase", "Card", "Cushion"],
    required: true
  },

  basePrice: {
    type: Number,
    required: true
  },

  images: {
    type: [String], 
    default: []
  },

  mockupImage: {
    type: String 
  },

  customizable: {
    type: Boolean,
    default: true
  },

  stock: {
    type: Number,
    default: 10
  },


}, { timestamps: true });

const Gift = model("Gift", GiftSchema);

export default Gift;
