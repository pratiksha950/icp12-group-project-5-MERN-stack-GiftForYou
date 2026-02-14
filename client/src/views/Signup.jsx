import { useEffect, useState } from "react";
import { setPageTitle } from "../utils.jsx";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom"; // ✅ FIXED: added useNavigate
import Navbar from "../components/Navbar";

function SignUp() {

  const navigate = useNavigate(); // ✅ FIXED

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

  // ✅ FIXED: added try-catch + validation
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

        // reset form
        setNewUser({
          name: "",
          email: "",
          mobile: "",
          city: "",
          country: "",
          password: ""
        });

        // ✅ FIXED: React navigation instead of window.location
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

      <form 
        onSubmit={createUser} // ✅ FIXED: form submit
        className="w-60 flex flex-col justify-center items-center m-auto gap-4"
      >
        <h2>SignUp</h2>

        <Input
          type="text"
          placeholder="Name"
          value={newUser.name}
          autoComplete="off"
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />

        <Input
          type="email"
          placeholder="Email"
          value={newUser.email}
          autoComplete="off"
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />

        <Input
          type="text"
          placeholder="Mobile"
          value={newUser.mobile}
          onChange={(e) => setNewUser({ ...newUser, mobile: e.target.value })}
        />

        <Input
          type="text"
          placeholder="City"
          value={newUser.city}
          onChange={(e) => setNewUser({ ...newUser, city: e.target.value })}
        />

        <Input
          type="text"
          placeholder="Country"
          value={newUser.country}
          onChange={(e) => setNewUser({ ...newUser, country: e.target.value })}
        />

        <Input
          type="password"
          placeholder="Password"
          autoComplete="new-password" // ✅ FIXED browser autofill issue
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />

        <Button title="Sign Up" type="submit" /> {/* ✅ FIXED */}

        <Link to="/login" className="text-blue-500">
          Already have an account? Login
        </Link>

        <Toaster />
      </form>
    </>
  );
}

export default SignUp;
