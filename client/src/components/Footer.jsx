import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-pink-50 text-gray-700 mt-16 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-pink-600">GiftForYou</h2>
          <p className="mt-4 text-sm leading-relaxed">
            Personalized gifts for every occasion. We deliver happiness through
            thoughtful and creative gift collections.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul>
            <li> <Link to="/home" className="hidden md:block hover:text-pink-500 text-sm">
            Home
          </Link></li>
          <li> <Link to="/about" className="hidden md:block hover:text-pink-500 text-sm">
            About
          </Link></li>

        <li><Link to="/contact" className="hidden md:block hover:text-pink-500 text-sm">
            Contact
          </Link></li>

          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
  <li><Link to="/wedding" className="hover:text-pink-500">Wedding</Link></li>
  <li><Link to="/birthday" className="hover:text-pink-500">Birthday</Link></li>
  <li><Link to="/valentine" className="hover:text-pink-500">Valentine</Link></li>
  <li><Link to="/fashion" className="hover:text-pink-500">Fashion</Link></li>
  <li><Link to="/cake" className="hover:text-pink-500">Cakes</Link></li>
</ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
          <p className="text-sm mb-3">Get updates about new gifts & offers.</p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-3 py-2 border rounded-l-lg outline-none focus:ring-2 focus:ring-pink-300"
            />
            <button className="bg-blue-600 text-white px-4 rounded-r-lg
             hover:bg-blue-800">
              Join
            </button>
          </div>
          {/* Social Icons */}
      <div className="flex gap-4 mt-6 text-pink-600 text-lg">

  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-125 hover:text-blue-600 transition"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-125 hover:text-pink-500 transition"
  >
    <FaInstagram />
  </a>

  <a
    href="https://twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-125 hover:text-sky-500 transition"
  >
    <FaTwitter />
  </a>

  <a
    href="https://github.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-125 hover:text-black transition"
  >
    <FaGithub />
  </a>

</div>
 </div>
</div>
{/* Bottom Bar */}
      <div className="border-t text-center py-4 text-sm bg-pink-100">
        © {new Date().getFullYear()} GiftForYou. All rights reserved.
      </div>
    </footer>
  );
}
