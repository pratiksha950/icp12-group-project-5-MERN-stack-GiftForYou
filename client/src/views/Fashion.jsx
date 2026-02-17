import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { Toaster } from "react-hot-toast";
import { addToCart } from "../utils";

const Fashion = () => {
  const products = [
    {
      id: 401,
      name: "Custom Photo T-Shirt",
      description: "Wear your favorite memory on a tee",
      price: 499,
      originalPrice: 699,
      discount: 29,
      image: "https://via.placeholder.com/300x300?text=Photo+T-Shirt",
    },
    {
      id: 402,
      name: "Personalized Hoodie",
      description: "Cozy hoodie with your custom design",
      price: 799,
      originalPrice: 999,
      discount: 20,
      image: "https://via.placeholder.com/300x300?text=Custom+Hoodie",
    },
    {
      id: 403,
      name: "Custom Photo Jacket",
      description: "Stylish jacket with your personalized print",
      price: 1299,
      originalPrice: 1599,
      discount: 19,
      image: "https://via.placeholder.com/300x300?text=Photo+Jacket",
    },
    {
      id: 404,
      name: "Personalized Cap",
      description: "Trendy cap with custom embroidery or print",
      price: 399,
      originalPrice: 499,
      discount: 20,
      image: "https://via.placeholder.com/300x300?text=Custom+Cap",
    },
    {
      id: 405,
      name: "Custom Polo Shirt",
      description: "Premium polo with your photo and name",
      price: 599,
      originalPrice: 799,
      discount: 25,
      image: "https://via.placeholder.com/300x300?text=Polo+Shirt",
    },
    {
      id: 406,
      name: "Personalized Sweatshirt",
      description: "Comfortable sweatshirt with custom design",
      price: 699,
      originalPrice: 899,
      discount: 22,
      image: "https://via.placeholder.com/300x300?text=Sweatshirt",
    },
    {
      id: 407,
      name: "Custom Photo Tank Top",
      description: "Summer ready tank with your favorite photo",
      price: 349,
      originalPrice: 499,
      discount: 30,
      image: "https://via.placeholder.com/300x300?text=Tank+Top",
    },
    {
      id: 408,
      name: "Personalized Beanie",
      description: "Cozy beanie with custom embroidery",
      price: 299,
      originalPrice: 399,
      discount: 25,
      image: "https://via.placeholder.com/300x300?text=Custom+Beanie",
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