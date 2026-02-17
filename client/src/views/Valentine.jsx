import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { Toaster } from "react-hot-toast";
import { addToCart } from "../utils";
import { generatePlaceholderImage } from "../utils/placeholderImage";

const Valentine = () => {
  const products = [
    {
      id: 201,
      name: "Love Letter Personalized Card",
      description: "Express your feelings with a custom card",
      price: 399,
      originalPrice: 499,
      discount: 20,
      image: generatePlaceholderImage("Love Card", "#fee2e2"),
    },
    {
      id: 202,
      name: "Couple Photo Locket",
      description: "Precious moments in a beautiful locket",
      price: 699,
      originalPrice: 899,
      discount: 22,
      image: generatePlaceholderImage("Couple Locket", "#fee2e2"),
    },
    {
      id: 203,
      name: "Custom Love Story Book",
      description: "Our memories in a beautiful photo book",
      price: 999,
      originalPrice: 1299,
      discount: 23,
      image: generatePlaceholderImage("Love Book", "#fee2e2"),
    },
    {
      id: 204,
      name: "Personalized Valentine Mug Set",
      description: "Matching mugs with your couple photo",
      price: 799,
      originalPrice: 999,
      discount: 20,
      image: generatePlaceholderImage("Valentine Mugs", "#fee2e2"),
    },
    {
      id: 205,
      name: "Custom Love Pillow Cover",
      description: "Romantic pillow with your couple photo",
      price: 599,
      originalPrice: 799,
      discount: 25,
      image: generatePlaceholderImage("Love Pillow", "#fee2e2"),
    },
    {
      id: 206,
      name: "Personalized Valentine Canvas",
      description: "Beautiful canvas with a heartfelt message",
      price: 899,
      originalPrice: 1199,
      discount: 25,
      image: generatePlaceholderImage("Valentine Canvas", "#fee2e2"),
    },
    {
      id: 207,
      name: "Custom Couple Portrait Sketch",
      description: "Hand-drawn style portrait of you both",
      price: 799,
      originalPrice: 999,
      discount: 20,
      image: generatePlaceholderImage("Couple Sketch", "#fee2e2"),
    },
    {
      id: 208,
      name: "Personalized Valentine Magnetic Photo",
      description: "Cute magnetic photo for your fridge",
      price: 249,
      originalPrice: 349,
      discount: 29,
      image: generatePlaceholderImage("Love Magnet", "#fee2e2"),
    },
  ];

  return (
    <>
      <Navbar />
      <div className="p-6 bg-gradient-to-b from-red-50 to-white min-h-screen">
        <Toaster />
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-red-600 text-center">Valentine's Gifts</h1>
          <p className="text-gray-600 mb-8 text-center">Show your love with personalized Valentine's day gifts</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-0">
            {products.map((product) => (
              <Card key={product.id} {...product} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Valentine;