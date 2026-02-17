import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { Toaster } from "react-hot-toast";
import { addToCart } from "../utils";

const Birthday = () => {
  const products = [
    {
      id: 1,
      name: "Personalized Birthday Card",
      description: "Custom image & heartfelt message",
      price: 499,
      originalPrice: 599,
      discount: 20,
      image: "https://via.placeholder.com/300x300?text=Birthday+Card",
    },
    {
      id: 2,
      name: "Custom Birthday Cushion",
      description: "Upload your favorite birthday photo",
      price: 899,
      originalPrice: 999,
      discount: 10,
      image: "https://via.placeholder.com/300x300?text=Birthday+Cushion",
    },
    {
      id: 3,
      name: "Personalized Photo Mug",
      description: "Your favorite moment on a mug",
      price: 399,
      originalPrice: 499,
      discount: 20,
      image: "https://via.placeholder.com/300x300?text=Photo+Mug",
    },
    {
      id: 4,
      name: "Birthday Photo Frame",
      description: "Beautiful wooden frame with custom photo",
      price: 599,
      originalPrice: 799,
      discount: 25,
      image: "https://via.placeholder.com/300x300?text=Photo+Frame",
    },
    {
      id: 5,
      name: "Personalized Birthday Plate",
      description: "Ceramic plate with custom birthday design",
      price: 449,
      originalPrice: 599,
      discount: 25,
      image: "https://via.placeholder.com/300x300?text=Birthday+Plate",
    },
    {
      id: 6,
      name: "Custom Photo Blanket",
      description: "Cozy fleece blanket with your favorite photos",
      price: 699,
      originalPrice: 899,
      discount: 22,
      image: "https://via.placeholder.com/300x300?text=Photo+Blanket",
    },
    {
      id: 7,
      name: "Personalized Birthday Keychain",
      description: "Durable keychain with custom photo and name",
      price: 199,
      originalPrice: 299,
      discount: 33,
      image: "https://via.placeholder.com/300x300?text=Birthday+Keychain",
    },
    {
      id: 8,
      name: "Custom Birthday Puzzle",
      description: "Fun 500-piece puzzle with your favorite photo",
      price: 549,
      originalPrice: 699,
      discount: 21,
      image: "https://via.placeholder.com/300x300?text=Photo+Puzzle",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="p-6 bg-gradient-to-b from-pink-50 to-white min-h-screen">
        <Toaster />
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-pink-600">Birthday Gifts</h1>
          <p className="text-gray-600 mb-8">Celebrate with personalized birthday gifts</p>

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

export default Birthday;
