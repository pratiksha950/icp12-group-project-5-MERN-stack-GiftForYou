import { useEffect, useState } from "react";
import { setPageTitle } from "../utils.jsx";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom"; 
import Navbar from "../components/Navbar";
import signupImg from "../assets/signup-img.jpg";

function SignUp() {

  const navigate = useNavigate(); 
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    country: "",
    password: "",
    profilePic: ""
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
          password: "",
          profilePic: ""
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

<div className="min-h-screen bg-gray-100 flex flex-col md:flex-row items-center justify-center px-4">

  <div className="hidden md:flex md:w-1/2 h-full items-center justify-center">
    <img
      src={signupImg}
      alt="signup"
      className="h-[511px] w-full object-cover rounded-l-lg"
    />
  </div>

  <div className="bg-white shadow-lg rounded-lg w-full md:w-1/2 max-w-lg p-6 sm:p-8">

    

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

      <div className="border px-3 py-2 rounded w-full">
        <label className="block text-sm font-medium text-gray-700 mb-2">Profile Picture (Optional)</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
              setNewUser({ ...newUser, profilePic: reader.result });
            };
            if (file) {
              reader.readAsDataURL(file);
            }
          }}
          className="w-full"
        />
        {newUser.profilePic && (
          <div className="mt-3 flex justify-center">
            <img
              src={newUser.profilePic}
              alt="preview"
              className="w-20 h-20 rounded-full object-cover border-2 border-pink-500"
            />
          </div>
        )}
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
