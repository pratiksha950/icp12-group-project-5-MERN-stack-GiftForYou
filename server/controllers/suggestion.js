import Suggestion from "../models/Suggestion.js";

export const createSuggestion = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const suggestion = await Suggestion.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Suggestion sent successfully",
      data: suggestion,
    });
  } catch (error) {
    console.error("Create Suggestion Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};