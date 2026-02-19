import React from "react";
import team1 from "../assets/homeimg/team1.jpg";
import team2 from "../assets/homeimg/team2.jpg";
import team3 from "../assets/homeimg/team3.jpg";
import team4 from "../assets/homeimg/team4.jpg";
import SubHeading from "./SubHeading";

function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Rahul Naktode",
      role: "Founder",
      image: team1,
    },
    {
      id: 2,
      name: "Vaishnavi Gund",
      role: "UI/UX Designer",
      image: team2,
    },
    {
      id: 3,
      name: "Pratiksha Salunke",
      role: "Co-Founder",
      image: team3,
    },
    {
      id: 4,
      name: "Nikita",
      role: "Marketing Manager",
      image: team4,
    },
  ];

  return (
    <section className="py-2">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <SubHeading text="Our Team" />
        <p className="text-center text-gray-900 mt-2 mb-4 font-medium">
          Meet the team behind GiftForYou 
        </p>

        <div className="flex flex-wrap justify-center gap-8 ">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition w-64 "
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-pink-600"
              />
              <h3 className="text-lg font-semibold mt-4">{member.name}</h3>
              <p className="text-pink-500 font-medium">{member.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TeamSection;
