import React, { useState, useRef } from "react";
import Button from "./Button.jsx";
import { Plus, Minus } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

/* ================= IMAGEKIT IMPORTS (ADDED) ================= */
import {
    upload,
    ImageKitAbortError,
    ImageKitInvalidRequestError,
    ImageKitUploadNetworkError,
    ImageKitServerError,
} from "@imagekit/react";

function Card({ image, name, description, price, originalPrice, discount, addToCart, id }) {
    const [quantity, setQuantity] = useState(1);
    const [customImage, setCustomImage] = useState(null);
    const [customText, setCustomText] = useState("");

    const fileInputRef = useRef(null);

<<<<<<< HEAD
  const authenticator = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth`); // backend auth route
    if (!response.ok) throw new Error("ImageKit auth failed");
    return response.json(); // { signature, expire, token, publicKey }
  };
=======
    const authenticator = async () => {
        const response = await fetch(`http://localhost:8080/auth`); // backend auth route
        if (!response.ok) throw new Error("ImageKit auth failed");
        return response.json(); // { signature, expire, token, publicKey }
    };
>>>>>>> cf3f00b2baeb90f1a64ac0479c30d61447daf327

    const handleImageKitUpload = async (file) => {
        try {
            const { signature, expire, token, publicKey } = await authenticator();

            const uploadResponse = await upload({
                file,
                fileName: file.name,
                signature,
                expire,
                token,
                publicKey,
            });

            setCustomImage(uploadResponse.url);

            toast.success("Image uploaded successfully");
        } catch (error) {
            if (error instanceof ImageKitAbortError)
                toast.error("Upload aborted");
            else if (error instanceof ImageKitInvalidRequestError)
                toast.error("Invalid request");
            else if (error instanceof ImageKitUploadNetworkError)
                toast.error("Network error");
            else if (error instanceof ImageKitServerError)
                toast.error("Server error");
            else toast.error("Upload failed");
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        handleImageKitUpload(file);
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
                        ref={fileInputRef}
                        onChange={handleImageChange}
                        className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm cursor-pointer"
                    />

                    {customImage && (
                        <img
                            src={customImage}
                            alt="Custom Upload"
                            className="h-24 w-full object-cover rounded-lg border"
                        />
                    )}

                    <input
                        type="text"
                        placeholder="Add short description"
                        value={customText}
                        onChange={(e) => setCustomText(e.target.value)}
                        className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-center text-sm"
                    />
                </div>

                <div className="flex mt-4 px-4 items-center justify-center text-[20px] font-bold border border-yellow-300 border-[3px] rounded-full mx-auto w-fit h-8 mb-2">
                    <Minus
                        className="cursor-pointer m-2"
                        onClick={() => {
                            if (quantity > 1) setQuantity(quantity - 1);
                            else toast.error("Quantity cannot be less than 1");
                        }}
                    />
                    <label className="m-3">{quantity}</label>
                    <Plus
                        className="cursor-pointer m-1"
                        onClick={() => setQuantity(quantity + 1)}
                    />
                </div>

                <p className="text-sm font-medium text-green-700 bg-green-100 px-2 py-1 rounded-md text-center">
                    Discount: {discount}%
                </p>

                <p className="text-xl font-bold text-blue-700 mt-4 text-center">
                    <span className="line-through text-blue-400 mr-2">
                        ₹{originalPrice}
                    </span>
                    ₹{price}
                </p>

                <div className="mt-4 justify-center flex">
                    <Button
                        title="Add To Cart"
                        onClick={() => {
                            const product = {
                                id,
                                name,
                                price,
                                quantity,
                                description: customText || description,
                                productImage: image,
                                customImage,
                                totalAmount: price * quantity,
                            };

                            addToCart(product);

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