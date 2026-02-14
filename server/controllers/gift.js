import Gift from "../models/gift.js";
import dotenv from "dotenv";

dotenv.config();

const getGifts=async(req, res) => {
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
}

export { getGifts }