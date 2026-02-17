import { useEffect, useState } from "react"
import { setPageTitle } from "../utils.jsx"
import Input from "../components/Input.jsx"
import Button from "../components/Button.jsx"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"
import { Link } from "react-router-dom"
import Navbar from '../components/Navbar'
import loginImg from "../assets/homeimg/login.png"



function Login() {
  useEffect(() => {
    setPageTitle("Login-TinyTour")
  }, [])

  const [loginUser, setLoginUser] = useState({
    email: "",
    password: ""
  })

  const checkUserLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/login`,
        loginUser
      )
      console.log(response.data);

      if (response.data.success) {
        toast.success(response.data.message, { id: "loginSuccess" })
        setLoginUser({ email: "", password: "" })


        const {token,data}=response.data;
        localStorage.setItem("userJwtToken",token);
        localStorage.setItem("userData",JSON.stringify(data));

        setTimeout(()=>{
          window.location.href="/";
        },1500)

      } else {
        toast.error(response.data.message, { id: "loginFail" })
      }
    } catch (error) {
      toast.error("Server not responding"+ error.message)
    }
  }

  return (
    <> <Navbar />
  <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row items-center justify-center px-4">

  <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-full max-w-4xl mx-auto overflow-hidden">

     <div className="hidden md:flex md:w-1/2 h-full items-center justify-center">
        <img
          src={loginImg}
          alt="login"
          className="h-[511px] w-full object-cover rounded-l-lg"
        />
      </div>
    

    <div className="bg-white shadow-lg rounded-lg w-full md:w-1/2 max-w-lg p-6 sm:p-8">
      <h2 className="text-lg sm:text-2xl font-bold text-center mb-1">
        Welcome Back
      </h2>

      <p className="text-xs sm:text-sm text-center text-gray-500 mb-3">
        Login to continue to GiftForYou
      </p>

      <form onSubmit={checkUserLogin} className="flex flex-col gap-3 sm:gap-4">

        <Input
          type="email"
          placeholder="Email"
          autoComplete="off"
          value={loginUser.email}
          onChange={(e) =>
            setLoginUser({ ...loginUser, email: e.target.value })
          }
          className="border px-3 py-2 rounded w-full"
        />

        <Input
          type="password"
          placeholder="Password"
          autoComplete="new-password"
          value={loginUser.password}
          onChange={(e) =>
            setLoginUser({ ...loginUser, password: e.target.value })
          }
          className="border px-3 py-2 rounded w-full"
        />

        <div className="flex justify-center">
          <Button title="Login" type="submit" varient="primary" />
        </div>

        <p className="text-center text-xs sm:text-sm">
          Don't have an account?
          <Link to="/signUp" className="text-purple-600 ml-1 font-semibold">
            Sign Up
          </Link>
        </p>

        <Toaster />
      </form>

    </div>
  </div>
</div>

    </>
  )
}

export default Login
