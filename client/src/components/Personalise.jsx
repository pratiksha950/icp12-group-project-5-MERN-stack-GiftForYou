import React from "react";
import { Link } from "react-router-dom";
import Personalise1 from "../assets/homeimg/Personalise1.png";
import Personalise2 from "../assets/homeimg/Personalise2.png";
import Personalise3 from "../assets/homeimg/Personalise3.png";
import Personalise4 from "../assets/homeimg/Personalise4.png";
import Heading from "./Heading";

const gifts = [
  { title: "Luxury Vibe", img: Personalise1, link: "/fashion" },
  { title: "Hamper", img: Personalise2, link: "/wedding" },
  { title: "Sippers", img: Personalise3, link: "/fashion" },
  { title: "Cusions", img: Personalise4, link: "/birthday" },
];

function Personalise() {
  return (
    <div className="py-10 px-6">
      <Heading text="Personalise your moments" />

      <div className="flex gap-6 overflow-x-auto flex-wrap justify-center items-center">
        {gifts.map((gift, index) => (
          <Link to={gift.link} key={index} className="flex flex-col items-center">
            <div className="bg-white rounded-2xl shadow-lg hover:scale-105 transition">
              <img
                src={gift.img}
                alt={gift.title}
                className="w-70 h-70 object-cover rounded-xl"
              />
            </div>
            <p className="mt-3 font-medium text-lg">{gift.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Personalise;
