import React, { useState, useEffect } from "react";
import { getUserData } from "../utils";
import Navbar from "../components/Navbar"
import Avatar from "../components/Avatar";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";
import ProfileImg from "../assets/profile-update.png"
import { Link } from "react-router";
import Heading from "../components/Heading";

function Profile() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobile: "",
    whatsapp: "",
    address: "",
    city: "",
    pincode: "",
    country: ""
  });

  useEffect(() => {
    const data = getUserData();
    console.log("USER DATA:", data);
    setUserData(prev => ({ ...prev, ...data }));
  }, []);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const updateProfile = async () => {
    try {
      const token = localStorage.getItem("userJwtToken");

      const response = await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/profile`,
        userData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      localStorage.setItem("userData", JSON.stringify(response.data.data));

      alert("Profile Updated Successfully");

      window.location.reload();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />

      <Heading text="Update Profile" />
      <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-full max-w-4xl mx-auto overflow-hidden mt-10">
        <div className="flex flex-col items-center">
          <img src={ProfileImg} alt="Profile" className="h-full w-full object-cover" />
        </div>


        <div className="w-full md:w-1/2 p-4 sm:p-6 mx-2 my-2">

          <h2 className="text-lg sm:text-2xl font-bold text-center mb-1">
            Welcome Back
          </h2>

          <p className="text-xs sm:text-sm text-center text-gray-500 mb-3">
            Update your profile information
          </p>

          <div className="w-full mx-2 my-2 space-y-4">

            <Input name="name"
              value={userData.name}
              onChange={handleChange}
              placeholder="Name"
            />

            <Input name="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="Email"
              className="mt-10"
            />

            <Input name="mobile"
              value={userData.mobile}
              onChange={handleChange}
              placeholder="Mobile" />

            <Input name="whatsapp"
              value={userData.whatsapp}
              onChange={handleChange}
              placeholder="Whatsapp" />

            <Input name="address"
              value={userData.address}
              onChange={handleChange}
              placeholder="Address" />

            <Input name="city"
              value={userData.city}
              onChange={handleChange}
              placeholder="City" />

            <Input name="pincode"
              value={userData.pincode}
              onChange={handleChange}
              placeholder="Pincode" />

            <Input name="country"
              value={userData.country}
              onChange={handleChange}
              placeholder="Country" />

            <Link to="/" className="flex justify-center">
              <Button title="Update Profile" varient="primary" onClick={updateProfile} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;