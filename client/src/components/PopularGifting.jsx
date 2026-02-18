import React from "react";
import gift1 from "../assets/homeimg/gift1.png";
import gift2 from "../assets/homeimg/gift2.png";
import gift3 from "../assets/homeimg/gift3.png";
import gift4 from "../assets/homeimg/gift4.png";


const gifts = [
  {
    title: "Corporate Gifts",
    img: gift1,
  },
  {
    title: "Get Today",
    img: gift2,
  },
  {
    title: "Midnight Delivery",
    img: gift3,
  },
  {
    title: "Just Launched",
    img: gift4,
  },
];

function PopularGifting() {
  return (
    <div className="py-10 px-6">

      <div className="flex gap-6 overflow-x-auto flex-wrap justify-center items-center">
        {gifts.map((gift, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-white rounded-2xl shadow-lg hover:scale-105 transition">
              <img
                src={gift.img}
                alt={gift.title}
                className="w-44 h-44 object-cover rounded-xl"
              />
            </div>
            <p className="mt-3 font-medium text-lg">{gift.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularGifting;
