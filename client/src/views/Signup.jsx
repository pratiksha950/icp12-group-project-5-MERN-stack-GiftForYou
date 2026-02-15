import { useEffect, useState } from "react";
import { setPageTitle } from "../utils.jsx";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom"; 
import Navbar from "../components/Navbar";

function SignUp() {

  const navigate = useNavigate(); 
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    country: "",
    password: ""
  });

  useEffect(() => {
    setPageTitle("SignUp-TinyTour");
  }, []);

  const createUser = async (e) => {
    e.preventDefault();

    if (!newUser.name || !newUser.email || !newUser.password) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/signUp`,
        newUser
      );

      console.log(response.data);

      if (response.data.success) {
        toast.success(response.data.message, { id: "signupSuccess" });

        setNewUser({
          name: "",
          email: "",
          mobile: "",
          city: "",
          country: "",
          password: ""
        });

        setTimeout(() => {
          navigate("/login");
        }, 1500);

      } else {
        toast.error(response.data.message, { id: "signupError" });
      }

    } catch (error) {
      console.error(error);
      toast.error("Server error! Try again later");
    }
  };

  return (
    <>
      <Navbar />

<div className="min-h-screen bg-gray-100 flex justify-center pt-6 md:pt-0 md:items-center px-4">

  <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-6 sm:p-8">

    <h2 className="text-xl sm:text-2xl font-bold text-center mb-1">
      Create Account
    </h2>
    <p className="text-sm text-center text-gray-500 mb-5">
      Join GiftForYou today 
    </p>

    <form
      onSubmit={createUser}
      className="flex flex-col gap-3"
    >

      <Input
        type="text"
        placeholder="Full Name"
        value={newUser.name}
        autoComplete="off"
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        className="border px-3 py-2 rounded w-full"
      />

      <Input
        type="email"
        placeholder="Email Address"
        value={newUser.email}
        autoComplete="off"
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        className="border px-3 py-2 rounded w-full"
      />

      <Input
        type="text"
        placeholder="Mobile Number"
        value={newUser.mobile}
        onChange={(e) => setNewUser({ ...newUser, mobile: e.target.value })}
        className="border px-3 py-2 rounded w-full"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input
          type="text"
          placeholder="City"
          value={newUser.city}
          onChange={(e) => setNewUser({ ...newUser, city: e.target.value })}
          className="border px-3 py-2 rounded w-full"
        />

        <Input
          type="text"
          placeholder="Country"
          value={newUser.country}
          onChange={(e) => setNewUser({ ...newUser, country: e.target.value })}
          className="border px-3 py-2 rounded w-full"
        />
      </div>

      <Input
        type="password"
        placeholder="Password"
        autoComplete="new-password"
        value={newUser.password}
        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        className="border px-3 py-2 rounded w-full"
      />

      <div className="flex justify-center mt-2">
        <Button
          title="Sign Up"
          type="submit"
          varient="primary"
        />
      </div>

      <p className="text-center text-sm mt-2">
        Already have an account?
        <Link to="/login" className="text-purple-600 ml-1 font-semibold">
          Login
        </Link>
      </p>

    </form>
  </div>

</div>
        <Toaster />
     
    </>
  );
}

export default SignUp;
