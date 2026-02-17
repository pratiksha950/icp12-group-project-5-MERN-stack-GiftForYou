
import React from 'react'
import { useState } from "react";
import Navbar from '../components/Navbar'
import Button from "../components/Button"
import Footer from '../components/Footer';

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);

    setForm({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <>
    <Navbar/>
   <div className="bg-slate-100 min-h-screen py-12 px-4 flex justify-center">

      {/* Toast */}
      {showToast && (
        <div className="fixed top-6 right-6 bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
          Message Sent Successfully 🎉
        </div>
      )}

      <div className="max-w-6xl w-full bg-white rounded-3xl p-8 shadow-lg">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-2">
          Contact Us
        </h1>

        <h2 className="text-xl font-semibold text-blue-800 text-center mb-8">
          Gift For You
        </h2>

        {/* GRID SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE → MAP + INFO */}
          <div>

            <p className="mb-2">
              <strong>Address:</strong> 123 Gift Street, Pune, India
            </p>

            <p className="mb-2">
              <strong>Phone:</strong>{" "}
              <a href="tel:+919860737643" className="text-blue-600 hover:underline">
                +91 9860737643
              </a>
            </p>

            <p className="mb-4">
              <strong>Email:</strong>{" "}
              <a href="mailto:nikitachormale4242@gmail.com" className="text-blue-600 hover:underline">
                nikitachormale4242@gmail.com
              </a>
            </p>

            <h3 className="text-lg font-semibold text-blue-800 mb-3">
              Location
            </h3>

            <div className="rounded-xl overflow-hidden shadow">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Pune,India&output=embed"
                className="w-full h-80 border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT SIDE → FORM */}
          <div>

            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Send Suggestion
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                name="message"
                placeholder="Your Suggestion..."
                value={form.message}
                onChange={handleChange}
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
              />

              <Button
                title="Send Message"
                type="submit"
                varient=" outline"
                size="md"
              />
            </form>

          </div>

        </div>
      </div>
    </div>
    <Footer/>
  </>
);
}
export default Contact



