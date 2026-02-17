import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { Toaster } from "react-hot-toast";
import { addToCart } from "../utils";
import { generatePlaceholderImage } from "../utils/placeholderImage";

const Fashion = () => {
  const products = [
    {
      id: 401,
      name: "Custom Photo T-Shirt",
      description: "Wear your favorite memory on a tee",
      price: 499,
      originalPrice: 699,
      discount: 29,
      image: generatePlaceholderImage("Photo T-Shirt", "#f3e8ff"),
    },
    {
      id: 402,
      name: "Personalized Hoodie",
      description: "Cozy hoodie with your custom design",
      price: 799,
      originalPrice: 999,
      discount: 20,
      image: generatePlaceholderImage("Custom Hoodie", "#f3e8ff"),
    },
    {
      id: 403,
      name: "Custom Photo Jacket",
      description: "Stylish jacket with your personalized print",
      price: 1299,
      originalPrice: 1599,
      discount: 19,
      image: generatePlaceholderImage("Photo Jacket", "#f3e8ff"),
    },
    {
      id: 404,
      name: "Personalized Cap",
      description: "Trendy cap with custom embroidery or print",
      price: 399,
      originalPrice: 499,
      discount: 20,
      image: generatePlaceholderImage("Custom Cap", "#f3e8ff"),
    },
    {
      id: 405,
      name: "Custom Polo Shirt",
      description: "Premium polo with your photo and name",
      price: 599,
      originalPrice: 799,
      discount: 25,
      image: generatePlaceholderImage("Polo Shirt", "#f3e8ff"),
    },
    {
      id: 406,
      name: "Personalized Sweatshirt",
      description: "Comfortable sweatshirt with custom design",
      price: 699,
      originalPrice: 899,
      discount: 22,
      image: generatePlaceholderImage("Sweatshirt", "#f3e8ff"),
    },
    {
      id: 407,
      name: "Custom Photo Tank Top",
      description: "Summer ready tank with your favorite photo",
      price: 349,
      originalPrice: 499,
      discount: 30,
      image: generatePlaceholderImage("Tank Top", "#f3e8ff"),
    },
    {
      id: 408,
      name: "Personalized Beanie",
      description: "Cozy beanie with custom embroidery",
      price: 299,
      originalPrice: 399,
      discount: 25,
      image: generatePlaceholderImage("Custom Beanie", "#f3e8ff"),
    },
  ];

  return (
    <>
      <Navbar />
      <div className="p-6 bg-gradient-to-b from-purple-50 to-white min-h-screen">
        <Toaster />
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-purple-600">Fashion Gifts</h1>
          <p className="text-gray-600 mb-8">Personalized fashion items for the style enthusiast</p>

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

export default Fashion;