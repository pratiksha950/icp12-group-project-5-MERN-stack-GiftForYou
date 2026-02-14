import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Contact from "./views/Contact";
import About from "./views/About";
import Profile from "./views/Profile";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);
