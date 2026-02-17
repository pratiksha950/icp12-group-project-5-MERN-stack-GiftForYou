import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { Toaster } from "react-hot-toast";
import { addToCart } from "../utils";

const Wedding = () => {
  const products = [
    {
      id: 101,
      name: "Personalized Wedding Invitation Card",
      description: "Elegant custom invitation with your photos",
      price: 799,
      originalPrice: 999,
      discount: 20,
      image: "https://via.placeholder.com/300x300?text=Wedding+Invitation",
    },
    {
      id: 102,
      name: "Custom Wedding Album",
      description: "Premium album with your wedding moments",
      price: 1299,
      originalPrice: 1599,
      discount: 19,
      image: "https://via.placeholder.com/300x300?text=Wedding+Album",
    },
    {
      id: 103,
      name: "Personalized Wedding Cushion Couple",
      description: "Beautiful couple cushion with custom portrait",
      price: 1099,
      originalPrice: 1299,
      discount: 15,
      image: "https://via.placeholder.com/300x300?text=Wedding+Cushion",
    },
    {
      id: 104,
      name: "Custom Wedding Thank You Card",
      description: "Personalized gratitude cards for your guests",
      price: 599,
      originalPrice: 799,
      discount: 25,
      image: "https://via.placeholder.com/300x300?text=Thank+You+Card",
    },
    {
      id: 105,
      name: "Personalized Wedding Frame",
      description: "Gold frame with couple's wedding photo",
      price: 799,
      originalPrice: 999,
      discount: 20,
      image: "https://via.placeholder.com/300x300?text=Wedding+Frame",
    },
    {
      id: 106,
      name: "Custom Wedding Canvas Print",
      description: "Beautiful canvas art of your special moment",
      price: 1399,
      originalPrice: 1799,
      discount: 22,
      image: "https://via.placeholder.com/300x300?text=Wedding+Canvas",
    },
    {
      id: 107,
      name: "Personalized Wedding Guest Book",
      description: "Elegant guest book with custom cover design",
      price: 899,
      originalPrice: 1099,
      discount: 18,
      image: "https://via.placeholder.com/300x300?text=Wedding+GuestBook",
    },
    {
      id: 108,
      name: "Custom Wedding Keychain Set",
      description: "Matching keychains with couple's photo",
      price: 299,
      originalPrice: 399,
      discount: 25,
      image: "https://via.placeholder.com/300x300?text=Wedding+Keychains",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="p-6 bg-gradient-to-b from-yellow-50 to-white min-h-screen">
        <Toaster />
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-yellow-600">Wedding Gifts</h1>
          <p className="text-gray-600 mb-8">Make your special day more memorable with personalized gifts</p>

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

export default Wedding;