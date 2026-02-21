import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { Toaster } from "react-hot-toast";
import { addToCart } from "../utils";
import birthdaycarddata from "../configs/birthdaycarddata"
import Heading from "../components/Heading.jsx";
import { useEffect } from "react";
import { setPageTitle } from "../utils.jsx";
import Footer from "../components/Footer.jsx";
import {useState} from "react"
import Input from "../components/Input.jsx";


const Birthday = () => {
  const [search, setSearch] = useState("");

   useEffect(() => {
    setPageTitle("GiftForYou- Birthday");
  }, []);

  const products = birthdaycarddata;

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="p-6 bg-[#f5f3ff] min-h-screen">
        <Toaster />
        <div className="max-w-7xl mx-auto">
          <Heading text="Birthday Gifts" />
          <h1 className="text-4xl font-bold mb-2 text-pink-600 text-center"></h1>

          <div className="max-w-md mx-auto mb-8">
            <Input
              type="text"
              placeholder="Search birthday gifts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-0">
            {filteredProducts.map((product) => (
        <Card key={product.id} {...product} addToCart={addToCart} />
      ))}
                </div>
        </div>
      </div>
        <Footer />
      
    </>
  );
};

export default Birthday;
