import React from "react";
import { Link } from "react-router-dom";

import occasion from "../assets/homeimg/occasion1.png";
import anniversary from "../assets/homeimg/image.png";
import trending from "../assets/homeimg/occasion3.jpg";
import Birthday from "../assets/homeimg/occasion2.png";

function OccasionSection() {

  const categories = [
    { name: "Anniversary", img: occasion , path: "/wedding" },
    { name: "Friends", img: anniversary, path: "/valentine" },
    { name: "Family", img:trending, path: "/cake" },
    { name: "Birthday", img: Birthday, path: "/birthday" },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center">
          Shop By Occasions & Relations
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Surprise Your Loved Ones
        </p>

        <div className="flex justify-center gap-8 mt-10 flex-wrap">

          {categories.map((item, index) => (
            <Link 
              to={item.path}
              key={index}
              className="group flex flex-col items-center"
            >
              <div className="w-60 h-80 bg-white rounded-t-full rounded-b-5xl overflow-hidden shadow-lg flex items-end">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="bg-gray-300 w-60 py-3 text-center rounded-b-xl font-semibold text-gray-700">
                {item.name}
              </div>

            </Link>
          ))}

        </div>
      </div>
    </div>
  );
}

export default OccasionSection;
