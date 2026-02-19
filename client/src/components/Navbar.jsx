import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { getUserData, logoutUser } from "../utils";
import Button from "./Button";
import toast, { Toaster } from "react-hot-toast";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [userData, setUserData] = useState({
    
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userData"));
    setUserData(user);

   
    const handleStorageChange = () => {
      const updatedUser = JSON.parse(localStorage.getItem("userData"));
      setUserData(updatedUser);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartCount(cart.length);
    };

    updateCartCount();

    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  return (
    <nav className="w-full bg-rose-100 shadow-md philosopher-regular">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        <h1 className="text-2xl font-bold text-pink-600 italic cursor-pointer">
          <Link to="/" className="hover:text-pink-500 lobster-two-bold md:text-3xl text-xl">GiftForYou</Link>
        </h1>

        <ul className="hidden lg:flex items-center gap-6 text-gray-700 font-medium">
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

          <div className="relative cursor-pointer text-lg">
            <Link to="/cart">🛒</Link>
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
          
          
          {userData ? (
            <div className="border-t pt-3">
              <Link to="/profile" className="flex items-center gap-2 py-2">
                {userData.profilePic ? (
                  <img
                    src={userData.profilePic}
                    alt="profile"
                    className="w-10 h-10 rounded-full object-cover border-2 border-pink-500"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-pink-400 flex items-center justify-center text-white font-bold text-sm">
                    {userData.username?.charAt(0).toUpperCase() || userData.name?.charAt(0).toUpperCase()}
                  </div>
                )}
                <span>Hello, {userData.username || userData.name}</span>
              </Link>
              <button
                onClick={() => {
                  logoutUser();
                  setMenuOpen(false);
                }}
                className="block w-full text-left bg-pink-500 text-white px-3 py-2 rounded hover:bg-pink-600 text-sm mt-2 md:flex hidden"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="block text-pink-500">Login</Link>
          )}
        </div>
      )}

      <Toaster />
    </nav>
  );
}

export default Navbar;
