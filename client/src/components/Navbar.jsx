import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { getUserData, logoutUser } from "../utils";
import Button from "./Button";
import toast, { Toaster } from "react-hot-toast";

function Navbar({ refreshCart }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [userData, setUserData] = useState({});

  const fetchUserData = () => {
    const data = getUserData();
    console.log(data);
    setUserData(data);
  }

  useEffect(() => {
    fetchUserData();
  }, [])

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartCount(cart.length);
  }, [refreshCart]);

  return (
    <nav className="w-full bg-rose-100 shadow-md philosopher-regular">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        <h1 className="text-2xl font-bold text-pink-600 italic cursor-pointer">
          <Link to="/" className="hover:text-pink-500">GiftForYou</Link>
        </h1>

        <ul className="hidden lg:flex items-center gap-6 text-gray-700 font-medium philosopher-regular">
          <Link to="/wedding" className="hover:text-pink-500">Wedding</Link>
          <Link to="/birthday" className="hover:text-pink-500">Birthday</Link>
          <Link to="/valentine" className="hover:text-pink-500">Valentine</Link>
          <Link to="/fashion" className="hover:text-pink-500">Fashion</Link>
          <Link to="/cake" className="hover:text-pink-500">Cakes</Link>
        </ul>

        <div className="flex items-center gap-4 text-gray-700">

          <Link to="/about" className="hidden md:block hover:text-pink-500 text-sm">About</Link>
          <Link to="/contact" className="hidden md:block hover:text-pink-500 text-sm">Contact</Link>

          <div>
            {userData?.name ? (
              <Link to="/profile" className="flex items-center">
                <Avatar name={userData.name} />
                Hello, {userData.name}
                <Button title="Logout" className="ml-2" varient="primary" onClick={logoutUser} />
              </Link>
            ) : (
              <Link to="/login" className="hidden md:block bg-pink-500 text-white px-3 py-1 text-sm rounded hover:bg-pink-600"> Login</Link>
            )}
          </div>

          <div className="relative cursor-pointer">
            <Link to="/cart" className="text-lg">🛒</Link>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
              {cartCount}
            </span>
          </div>

          <button className="lg:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md px-6 py-4 space-y-3 text-gray-700 font-medium">
          <Link to="/wedding" className="block">Wedding</Link>
          <Link to="/birthday" className="block">Birthday</Link>
          <Link to="/valentine" className="block">Valentine</Link>
          <Link to="/fashion" className="block">Fashion</Link>
          <Link to="/cake" className="block">Cakes</Link>
          <Link to="/about" className="block">About</Link>
          <Link to="/contact" className="block">Contact</Link>
          <Link to="/login" className="block text-pink-500">Login</Link>
        </div>
      )}
      <Toaster />
    </nav>
  );
}

export default Navbar;
