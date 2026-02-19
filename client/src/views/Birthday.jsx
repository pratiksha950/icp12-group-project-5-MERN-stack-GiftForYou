import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { Toaster } from "react-hot-toast";
import { addToCart } from "../utils";
import birthdaycarddata from "../configs/birthdaycarddata"
import Heading from "../components/Heading.jsx";

const Birthday = () => {
  
const products = birthdaycarddata;
  return (
    <>
      <Navbar />
      <div className="p-6 bg-gradient-to-b from-pink-50 to-white min-h-screen">
        <Toaster />
        <div className="max-w-7xl mx-auto">
          <Heading text="Birthday Gifts" />
          <h1 className="text-4xl font-bold mb-2 text-pink-600 text-center"></h1>
          <p className="text-gray-600 mb-8 text-center">Celebrate with personalized birthday gifts</p>

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
