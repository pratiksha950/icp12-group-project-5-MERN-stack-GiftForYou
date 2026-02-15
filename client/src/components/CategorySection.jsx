import React from "react";
import { Link } from "react-router-dom";

import flower1 from "../assets/homeimg/flower1.jpg";
import birthday1 from "../assets/homeimg/birthday1.jpg";
import cake1 from "../assets/homeimg/cake1.jpg";
import wedding1 from "../assets/homeimg/wedding1.jpg";
import fasion from "../assets/homeimg/fasion.png";
import Heading from "./Heading";

function CategorySection() {

  const categories = [
    { name: "Valentine’s Day", img: flower1, path: "/valentine" },
    { name: "Birthday", img: birthday1, path: "/birthday" },
    { name: "Cake", img: cake1, path: "/cake" },
    { name: "Wedding", img: wedding1, path: "/wedding" },
    { name: "Fashion", img: fasion, path: "/fashion" },
  ];

  return (
    <div className="py-2 mb-4">
      <div className="max-w-7xl mx-auto px-4">

        <Heading text="Explore Our Categories" />
                <p className="text-center text-gray-900 mt-2 mb-4 font-medium">
         Make Every Moment Special
        </p>


        <div className="flex flex-wrap justify-center gap-6">

          {categories.map((item, index) => (
            <Link 
              key={index}
              to={item.path}
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className="w-50 h-40 rounded-2xl overflow-hidden shadow-lg bg-white flex justify-center items-center">
                <img
                  src={item.img}
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                  alt={item.name}
                />
              </div>

              <p className="mt-3 text-sm font-semibold text-gray-700 text-center">
                {item.name}
              </p>
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
}

export default CategorySection;
