import React, { useState } from "react";
import Button from "./Button.jsx";
import { Plus, Minus } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';


const imageKitEndpoint = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT;
const imageKitPublicKey = import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY;

function Card({ image, name, description, price, originalPrice, discount, addToCart, id }) {
    const [quantity, setQuantity] = useState(1);
    const [customImage, setCustomImage] = useState(null);
    const [customText, setCustomText] = useState("");

    const handleImageChange = (e) => {
   const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    setCustomImage(reader.result); 
  };
  reader.readAsDataURL(file);
};


    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-4 flex flex-col justify-between h-auto w-[300px] border md:border-gray-300 border-gray-400">
            <Toaster />

          <div className="p-5 flex flex-col">
                <img
        src={image}
        alt={name}
        className="h-48 w-full object-cover rounded-t-xl"
      />

                <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
                <p className="text-sm text-gray-600">{description}</p>

                <div className="flex flex-col items-center mt-3 space-y-3">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm cursor-pointer hover:border-pink-400 transition duration-200 file:cursor-pointer file:bg-pink-100 file:text-pink-700 file:border-0 file:px-2 file:py-1 file:rounded"
                    />
                    <input
                        type="text"
                        placeholder="Add short description"
                        value={customText}
                        onChange={(e) => setCustomText(e.target.value)}
                        className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-center text-sm font-medium placeholder-gray-400 hover:border-pink-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition duration-200 bg-white"
                    />
                </div>
                 
               
                <div className='flex mt-4 px-4 items-center justify-center text-[20px] font-bold border border-yellow-300 border-[3px] rounded-full mx-auto w-fit h-8 mb-2'>
                    <Minus className='cursor-pointer m-2' onClick={() => {
                        if (quantity > 1) setQuantity(quantity - 1);
                        else toast.error("Quantity cannot be less than 1");
                    }} />
                    <label className="m-3">{quantity}</label>
                    <Plus className='cursor-pointer m-1' onClick={() => setQuantity(quantity + 1)} />
                </div>

                <p className="text-sm font-medium text-green-700 bg-green-100 px-2 py-1 rounded-md justify-center text-center">Discount: {discount}%</p>

                <p className="text-xl font-bold text-blue-700 mt-4 text-center">
                    <span className="line-through text-blue-400 mr-2">₹{originalPrice}</span> ₹{price}
                </p>

                <div className="mt-4 justify-center flex">
                    <Button
                        variant="primary"
                        size="medium"
                        title={"Add To Cart"}
                        onClick={() => {
                            if (customText.trim() === "" && customImage) {
                                toast.error("Please add a short description for customization!");
                                return;
                            }
                            addToCart({
                              id,
                              name,
                              price,
                              quantity,
                              description: customText || description,
                              productImage: image,       
                              customImage: customImage,                   
                              totalAmount: price * quantity
                            });

                            setQuantity(1);
                            setCustomImage(null);
                            setCustomText("");
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Card;
