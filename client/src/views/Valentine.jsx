import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { Toaster } from "react-hot-toast";
import { addToCart } from "../utils";
import valentinecarddata from "../configs/valentinecarddata";

const Valentine = () => {
  const products = valentinecarddata;
 

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