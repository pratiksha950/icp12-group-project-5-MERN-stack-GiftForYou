import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Contact from "./views/Contact";
import About from "./views/About";
import Wedding from "./views/Wedding";
import Birthday from "./views/Birthday";
import Fashion from "./views/Fashion";
import Cake from "./views/Cake";
import Valentine from "./views/Valentine";
import Cart from "./views/Cart";
import Profile from "./views/Profile";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/wedding" element={<Wedding />} />
      <Route path="/birthday" element={<Birthday />} />
      <Route path="/fashion" element={<Fashion />} />
      <Route path="/cake" element={<Cake />} />
      <Route path="/valentine" element={<Valentine />} />
     <Route path="/cart" element={<Cart />} />
     

      
    </Routes>
  </BrowserRouter>
);
