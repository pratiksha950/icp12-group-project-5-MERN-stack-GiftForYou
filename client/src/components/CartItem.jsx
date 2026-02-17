import React from "react";
import Button from "./Button.jsx";
import { Trash } from "lucide-react";
import cake1 from "../assets/homeimg/cake1.jpg";
const removeFromCart = (id, description) => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const updatedCartItems = cartItems.filter(item => !(item.id === id && item.description === description));
  localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  window.dispatchEvent(new Event("storage"));
};

function CartItem({ id, name, description, price, quantity, imageUrl }) {
  return (



    <div className="relative flex flex-col md:flex-row items-start gap-4 rounded-lg shadow-md p-4 mb-4 bg-white w-full max-w-4xl transition-shadow duration-300 hover:shadow-lg">

      <div className="absolute top-3 right-3">
        <Button
          title={<Trash size={16} />}
          variant="delete"
          size="small"
          onClick={() => removeFromCart(id, description)}
        />
      </div>


      <img
        src={cake1}
        alt={name}
        
      />

      <div className="flex gap-2">
        <img
          src={imageUrl}
          alt={name}
          className="w-32 h-32 object-cover rounded-3xl border"
        />
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
