import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { Toaster } from "react-hot-toast";
import { addToCart } from "../utils";
import  cakeProducts  from "../configs/cakedata";
import Heading from "../components/Heading.jsx";


const Cake = () => {

  const products = cakeProducts;
 
  return (
    <>
      <Navbar />
      <div className="p-6 bg-gradient-to-b from-amber-50 to-white min-h-screen">
        <Toaster />
        <div className="max-w-7xl mx-auto">
          <Heading text="Customized Cakes" />
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