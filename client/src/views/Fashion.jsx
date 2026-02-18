import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { Toaster } from "react-hot-toast";
import { addToCart } from "../utils";
import fashiondatacard from "../configs/fashiondatacard";

const Fashion = () => {
  const products = fashiondatacard;
  

  return (
    <>
      <Navbar />
      <div className="p-6 bg-gradient-to-b from-purple-50 to-white min-h-screen">
        <Toaster />
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-purple-600 text-center">Fashion Gifts</h1>
          <p className="text-gray-600 mb-8 text-center">Personalized fashion items for the style enthusiast</p>

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