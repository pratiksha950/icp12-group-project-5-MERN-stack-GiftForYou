import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { Toaster } from "react-hot-toast";
import { addToCart } from "../utils";
import fashiondatacard from "../configs/fashiondatacard";
import Heading from "../components/Heading.jsx";
import { useEffect } from "react";
import { setPageTitle } from "../utils.jsx";
import Footer from "../components/Footer.jsx";
import { useState } from "react"
import Input from "../components/Input.jsx";

const Fashion = () => {
  const [search, setSearch] = useState("");
  const products = fashiondatacard;

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.description.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setPageTitle("GiftForYou-Fashion");
  }, [])

  return (
    <>
      <Navbar />
      <div className="p-6 cv950@gmail.com min-h-screen">
        <Toaster />
        <div className="max-w-7xl mx-auto">
          <Heading text="Fashion Gifts" />

          <div className="max-w-md mx-auto mb-8">
            <Input
              type="text"
              placeholder="Search Fashion Gifts..."
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

export default Fashion;