import React from "react";
import Button from "./Button.jsx";
import { Trash } from "lucide-react";

const removeFromCart = (id, description) => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const updatedCartItems = cartItems.filter(item => !(item.id === id && item.description === description));
  localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  window.dispatchEvent(new Event("storage"));
};

function CartItem({ id, name, description, price, quantity, productImage, customImage }) {
  return (

    <div className="relative flex flex-col md:flex-row items-start gap-4 rounded-lg shadow-md p-4 mb-4 bg-white w-full max-w-4xl transition-shadow duration-300 hover:shadow-lg">

      <div className="absolute top-3 right-3">
        <Button
          title={<Trash size={16} />}
          variant="delete"
          size="xsm"
          onClick={() => removeFromCart(id, description)}
        />
      </div>


      <div className="flex gap-4">
        <img
          src={productImage}
          alt="Product"
          className="w-32 h-32 object-cover rounded-xl "
        />

        {customImage && (
          <img
            src={customImage}
            alt="Custom"
            className="w-22 h-22 object-cover rounded-xl border border-pink-400"
          />
        )}
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <p className="text-md font-semibold">{name}</p>
        <p className="text-sm text-gray-700">Customization: {description}</p>
        <p>Price: ₹ {price} </p>
        <p>Quantity: {quantity}</p>
        <p className="font-bold">Total: ₹ {price * quantity}</p>
      </div>
    </div>
  );
}

export default CartItem;