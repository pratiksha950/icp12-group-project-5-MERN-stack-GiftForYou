import React, { useState, useEffect } from "react";
import { getUserData } from "../utils";
import Avatar from "../components/Avatar";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";

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
    <div className="w-100 px-10 border m-auto">
      {userData.name && <Avatar name={userData.name} />}

      <Input name="name" value={userData.name} onChange={handleChange} placeholder="Name" />
      <Input name="email" value={userData.email} onChange={handleChange} placeholder="Email" />
      <Input name="mobile" value={userData.mobile} onChange={handleChange} placeholder="Mobile" />
      <Input name="whatsapp" value={userData.whatsapp} onChange={handleChange} placeholder="Whatsapp" />
      <Input name="address" value={userData.address} onChange={handleChange} placeholder="Address" />
      <Input name="city" value={userData.city} onChange={handleChange} placeholder="City" />
      <Input name="pincode" value={userData.pincode} onChange={handleChange} placeholder="Pincode" />
      <Input name="country" value={userData.country} onChange={handleChange} placeholder="Country" />

      <Button title="Update Profile" varient="primary" onClick={updateProfile} />
    </div>
  );
}

export default Profile;