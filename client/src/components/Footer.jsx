import React from "react";
import { Link } from "react-router";
import { Facebook, Instagram, Youtube, Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-rose-100 text-gray-700 mt-20 border-t shadow-inner border-none">

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">

        <div>
          <h2 className="text-3xl font-extrabold text-pink-600 tracking-wide">
            GiftForYou
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            Personalized Gifts For Every Occasion. We deliver happiness through
            thoughtful and creative gift collections.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-800 border-b pb-2">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-pink-500 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-pink-500 transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-pink-500 transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-800 border-b pb-2">
            Categories
          </h3>

          <ul className="space-y-2 text-sm">
            <li><Link to="/wedding" className="hover:text-pink-500 transition">Wedding</Link></li>
            <li><Link to="/birthday" className="hover:text-pink-500 transition">Birthday</Link></li>
            <li><Link to="/valentine" className="hover:text-pink-500 transition">Valentine</Link></li>
            <li><Link to="/fashion" className="hover:text-pink-500 transition">Fashion</Link></li>
            <li><Link to="/cake" className="hover:text-pink-500 transition">Cakes</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-800 border-b pb-2 ">
            Follow Us
          </h3>

          <p className="text-sm mb-4 text-gray-600">
            Get Updates About New Gifts & Offers.
          </p>

          <div className="flex justify-center md:justify-start gap-4 text-lg">
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

            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
              className="bg-white shadow-md p-2 rounded-full hover:scale-110 hover:text-red-500 transition">
              <Youtube />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t text-center py-4 text-sm bg-rose-200 text-gray-700 font-medium border-none">
        © {new Date().getFullYear()} GiftForYou. All rights reserved.
      </div>
    </footer>
  );
}
