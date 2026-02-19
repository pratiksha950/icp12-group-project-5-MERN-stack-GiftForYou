import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { getUserData, logoutUser } from "../utils";
import Button from "./Button";
import toast, { Toaster } from "react-hot-toast";

function Navbar({ refreshCart }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [userData, setUserData] = useState({
    
  });

  // Get user data from localStorage
  const fetchUserData = () => {
    const data = getUserData();
    console.log("NAVBAR USER DATA:", data);
    setUserData(data || {});
  };

  // Load user data on page load
  useEffect(() => {
    fetchUserData();

    // Auto update when localStorage changes
    const handleStorageChange = () => {
      fetchUserData();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Cart count update
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartCount(cart.length);
  }, [refreshCart]);

  return (
    <nav className="w-full bg-rose-100 shadow-md philosopher-regular">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-pink-600 italic cursor-pointer">
          <Link to="/" className="hover:text-pink-500">GiftForYou</Link>
        </h1>

        {/* MENU LINKS */}
        <ul className="hidden lg:flex items-center gap-6 text-gray-700 font-medium">
          <Link to="/wedding" className="hover:text-pink-500">Wedding</Link>
          <Link to="/birthday" className="hover:text-pink-500">Birthday</Link>
          <Link to="/valentine" className="hover:text-pink-500">Valentine</Link>
          <Link to="/fashion" className="hover:text-pink-500">Fashion</Link>
          <Link to="/cake" className="hover:text-pink-500">Cakes</Link>
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4 text-gray-700">

          <Link to="/about" className="hidden md:block hover:text-pink-500 text-sm">About</Link>
          <Link to="/contact" className="hidden md:block hover:text-pink-500 text-sm">Contact</Link>

          {/* USER SECTION */}
          <div>
            {userData?.name ? (
              <div className="flex items-center gap-2">
                <Link to="/profile" className="flex items-center gap-1">
                  {userData?.photos?.length > 0 ? (
  <img
    src={userData.photos[0]}
    alt="Profile"
    className="w-8 h-8 rounded-full object-cover"
  />
) : (
  <Avatar name={userData.name} />
)}
                  <span>Hello, {userData.name}</span>
                </Link>

                <Button
                  title="Logout"
                  varient="primary"
                  className="ml-2"
                  onClick={logoutUser}
                />
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden md:block bg-pink-500 text-white px-3 py-1 text-sm rounded hover:bg-pink-600"
              >
                Login
              </Link>
            )}
          </div>

          {/* CART ICON */}
          <div className="relative cursor-pointer">
            <Link to="/cart" className="text-lg">🛒</Link>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
              {cartCount}
            </span>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="lg:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
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
