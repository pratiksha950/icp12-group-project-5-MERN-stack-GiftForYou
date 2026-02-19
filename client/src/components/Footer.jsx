import React from "react";
import { Link } from "react-router";
import { Facebook, Instagram, Youtube, Github, Twitter } from "lucide-react"
import Button from "./Button";

export default function Footer() {
  return (

    <footer className="bg-gradient-to-br from-pink-50 via-white to-pink-100 text-gray-700 mt-20 border-t shadow-inner">

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-3xl font-extrabold text-pink-600 tracking-wide">
            GiftForYou
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            Personalized gifts for every occasion. We deliver happiness through
            thoughtful and creative gift collections.
          </p>

          <div className="w-14 h-1 bg-pink-500 rounded mt-4"></div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-5 text-gray-800 border-b pb-2">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-pink-500 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-pink-500 transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-pink-500 transition">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-5 text-gray-800 border-b pb-2">
            Categories
          </h3>

          <ul className="space-y-3 text-sm">
            <li><Link to="/wedding" className="hover:text-pink-500 transition">Wedding</Link></li>
            <li><Link to="/birthday" className="hover:text-pink-500 transition">Birthday</Link></li>
            <li><Link to="/valentine" className="hover:text-pink-500 transition">Valentine</Link></li>
            <li><Link to="/fashion" className="hover:text-pink-500 transition">Fashion</Link></li>
            <li><Link to="/cake" className="hover:text-pink-500 transition">Cakes</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-5 text-gray-800 border-b pb-2">
            Subscribe
          </h3>

          <p className="text-sm mb-4 text-gray-600">
            Get updates about new gifts & offers.
          </p>

          <div className="flex shadow-md rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-3 py-2 outline-none focus:ring-2 focus:ring-pink-300"
            />

            <Button
              title='join'
              size="md"
              variant="primary" />
          </div>
        
          <div className="flex gap-4 mt-7 text-lg">

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className="bg-white shadow-md p-2 rounded-full hover:scale-110 hover:text-blue-600 transition">
              <Facebook />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="bg-white shadow-md p-2 rounded-full hover:scale-110 hover:text-pink-500 transition">
              <Instagram />
            </a>

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              className="bg-white shadow-md p-2 rounded-full hover:scale-110 hover:text-sky-500 transition">
              <Twitter />
            </a>

            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
              className="bg-white shadow-md p-2 rounded-full hover:scale-110 hover:text-black transition">
              <Github />
            </a>

            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"
              className="bg-white shadow-md p-2 rounded-full hover:scale-110 hover:text-red-500 transition">
              <Youtube />
            </a>

          </div>
        </div>
      </div>
      
      <div className="border-t text-center py-5 text-sm bg-gradient-to-r from-pink-100 to-pink-200 text-gray-700 font-medium">
        © {new Date().getFullYear()} GiftForYou. All rights reserved.
      </div>
    </footer>
  );
}