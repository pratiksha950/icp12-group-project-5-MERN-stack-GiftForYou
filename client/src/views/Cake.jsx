import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { Toaster } from "react-hot-toast";
import { addToCart } from "../utils";
import { generatePlaceholderImage } from "../utils/placeholderImage";

const Cake = () => {
  const products = [
    {
      id: 301,
      name: "Customized Photo Cake",
      description: "Your favorite photo on a delicious cake",
      price: 999,
      originalPrice: 1299,
      discount: 23,
      image: generatePlaceholderImage("Photo Cake", "#fed7aa"),
    },
    {
      id: 302,
      name: "Personalized Buttercream Cake",
      description: "Custom design with your special message",
      price: 1299,
      originalPrice: 1599,
      discount: 19,
      image: generatePlaceholderImage("Buttercream Cake", "#fed7aa"),
    },
    {
      id: 303,
      name: "Chocolate Photo Cake",
      description: "Rich chocolate cake with custom photo topper",
      price: 899,
      originalPrice: 1099,
      discount: 18,
      image: generatePlaceholderImage("Chocolate Cake", "#fed7aa"),
    },
    {
      id: 304,
      name: "Theme Based Customized Cake",
      description: "Any theme you desire on your cake",
      price: 1199,
      originalPrice: 1499,
      discount: 20,
      image: generatePlaceholderImage("Theme Cake", "#fed7aa"),
    },
    {
      id: 305,
      name: "Multi-Tier Custom Photo Cake",
      description: "Beautiful tiered cake with custom photos on each tier",
      price: 1599,
      originalPrice: 1999,
      discount: 20,
      image: generatePlaceholderImage("Tiered Cake", "#fed7aa"),
    },
    {
      id: 306,
      name: "Strawberry Photo Cake",
      description: "Fresh strawberry cake with custom photo design",
      price: 849,
      originalPrice: 1099,
      discount: 23,
      image: generatePlaceholderImage("Strawberry Cake", "#fed7aa"),
    },
    {
      id: 307,
      name: "Personalized Eggless Photo Cake",
      description: "Delicious eggless cake with your custom photo",
      price: 699,
      originalPrice: 899,
      discount: 22,
      image: generatePlaceholderImage("Eggless Cake", "#fed7aa"),
    },
    {
      id: 308,
      name: "Custom Name Message Cake",
      description: "Vanilla cake with personalized name and message",
      price: 749,
      originalPrice: 949,
      discount: 21,
      image: generatePlaceholderImage("Name Cake", "#fed7aa"),
    },
  ];

  return (
    <>
      <Navbar />
      <div className="p-6 bg-gradient-to-b from-amber-50 to-white min-h-screen">
        <Toaster />
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-amber-600 text-center">Customized Cakes</h1>
          <p className="text-gray-600 mb-8 text-center">Delicious personalized cakes for every celebration</p>

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

export default Cake;