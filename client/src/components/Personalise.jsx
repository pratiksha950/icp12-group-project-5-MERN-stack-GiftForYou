import React from "react";
import { Link } from "react-router-dom";
import Personalise1 from "../assets/homeimg/Personalise1.png";
import Personalise2 from "../assets/homeimg/Personalise2.png";
import Personalise3 from "../assets/homeimg/Personalise3.png";
import Personalise4 from "../assets/homeimg/Personalise4.png";
import Heading from "./Heading";

const gifts = [
  { title: "Luxury Vibe", img: Personalise1, path: "/fashion" },
  { title: "Hamper", img: Personalise2, path: "/wedding" },
  { title: "Sippers", img: Personalise3, path: "/fashion" },
  { title: "Cusions", img: Personalise4, path: "/birthday" },
];

function Personalise() {
  return (
    <div className="py-10 px-6">
      <Heading text="Personalise your moments" />

      <div className="flex gap-6 overflow-x-auto flex-wrap justify-center items-center">
        {gifts.map((item, index) => (
          <Link to={item.path} key={index} className="flex flex-col items-center">
            <div className="bg-white rounded-2xl shadow-lg hover:scale-105 transition">
              <img
                src={item.img}
                alt={item.title}
                className="md:w-70 md:h-70 w-50 h-50 object-cover rounded-xl"
              />
            </div>
            <p className="mt-3 font-medium text-lg">{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Personalise;
