import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import CartItem from "../components/CartItem.jsx";
import Btn from "../components/Button.jsx";
import Heading from "../components/Heading.jsx";
import { setPageTitle } from "../utils.jsx";


function Cart() {
   useEffect(() => {
    setPageTitle("GiftForYou- Cart");
  }, []);

  const [cartItems, setCartItems] = useState([]);

  const loadCart = () => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCart);
  };

  useEffect(() => {
    loadCart();
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
        <Heading text="Your Cart" />

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col gap-4 mx-auto w-full max-w-4xl">
            {cartItems.map((item) => (
          <CartItem 
            key={item.id + item.description} 
            {...item} 
          />

            ))}

            <h2 className="text-xl font-bold text-right mt-4">
              Total: ₹ {totalAmount}
            </h2>

            <div className="flex justify-center">
              <Btn
                title="Proceed to Pay"
                variant="primary"
                size="md"
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
