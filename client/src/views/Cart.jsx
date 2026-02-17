import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import CartItem from "../components/CartItem.jsx";
import Btn from "../components/Button.jsx";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const loadCart = () => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCart);
  };

  useEffect(() => {
    loadCart();
    // Listen for storage changes from other pages
    const handleStorageChange = () => loadCart();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#F8FAFF] p-4">
        <h1 className="text-center text-2xl font-bold mb-4">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col gap-4 mx-auto w-full max-w-4xl">
            {cartItems.map((item) => (
              <CartItem key={item.id + item.description} {...item} />
            ))}

            <h2 className="text-xl font-bold text-right mt-4">
              Total: ₹ {totalAmount}
            </h2>

            <div className="flex justify-center">
              <Btn
                title="Proceed to Pay"
                variant="primary"
                size="large"
                onClick={() => (window.location.href = "https://www.phonepe.com/")}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
