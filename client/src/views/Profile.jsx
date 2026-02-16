import React from 'react'
import { useState,useEffect } from 'react';
import { getUserData } from '../utils';
import Avatar from '../components/Avatar';
import Input from '../components/Input';
import Button from '../components/Button';
import axios from 'axios';


function Profile() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobile: "",
    whatsapp: "",
    address: "",
    city: "",
    pincode: "",
    country:""
  });

  const token = localStorage.getItem("userJwtToken");
  console.log("TOKEN:", token);
  
  console.log(localStorage.getItem("userJwtToken"))

  const fetchUserData = () => {
    const data = getUserData();
    console.log(data);
    setUserData(prev => ({
    ...prev,
    ...data
  }));
  }

  useEffect(() => {
    fetchUserData()
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
      `${import.meta.env.VITE_API_BASE_URL}/gifts`,
      userData,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    alert(response.data.message);

  } catch (error) {
    console.log(error);
  }
  };
  return (
    <div className='w-100 px-10 border m-auto'>
      {userData.name ? (<div><Avatar name={userData.name}/> </div> ): null}

      <Input 
      type={"text"}
      placeholder={"Name"}
      name={"name"}
      value={userData.name}
      onChange={handleChange}
      />

      <Input 
      type={"text"}
      placeholder={"Email"}
      name={"email"}
      value={userData.email}
      onChange={handleChange}
      />

      <Input 
      type={"text"}
      placeholder={"Mobile"}
      name={"mobile"}
      value={userData.mobile}
      onChange={handleChange}
      />

      <Input 
      type={"text"}
      placeholder={"Whatsapp"}
      name={"whatsapp"}
      value={userData.whatsapp}
      onChange={handleChange}
      />

      <Input 
      type={"text"}
      placeholder={"Address"}
      name={"address"}
      value={userData.address}
      onChange={handleChange}
      />

      <Input 
      type={"text"}
      placeholder={"City"}
      name={"city"}
      value={userData.city}
      onChange={handleChange}
      />

      <Input 
      type={"text"}
      placeholder={"Pine Code"}
      name={"pincode"}
      value={userData.pincode}
      onChange={handleChange}
      />

      <Input 
      type={"text"}
      placeholder={"Country"}
      name={"country"}
      value={userData.country}
      onChange={handleChange}
      />

      <Button title="Update Profile" varient='primary' onClick={updateProfile}/>
    </div>
  )
}

export default Profile