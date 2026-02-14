import React from "react";

import flower1 from "../assets/flower1.jpg";
import flower2 from "../assets/flower2.jpg";
import flower3 from "../assets/flower3.jpg";

function CategorySection() {

  const categories = [
    { name: "Valentine’s Day", img: flower1 },
    { name: "Grand Gesture", img: flower2 },
    { name: "Valentine Flowers", img: flower3 },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[130px] cursor-pointer group"
            >
              <div className="w-28 h-28 rounded-2xl overflow-hidden shadow-lg bg-white">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              <p className="mt-3 text-sm font-semibold text-gray-700">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
