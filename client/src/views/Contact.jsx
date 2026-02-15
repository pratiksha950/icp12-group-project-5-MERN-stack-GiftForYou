import React from 'react'
import Navbar from "../components/Navbar"
import { useState } from "react";

function Contact() {

const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

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

    alert("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
      <>
    <Navbar/>
    <div className="bg-slate-100 min-h-screen flex items-center justify-center p-4">

      <div className="max-w-2xl w-full bg-white rounded-3xl p-8 text-center shadow-lg">

        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Contact Us
        </h1>

        <h2 className="text-xl font-semibold text-blue-800">
          Gift For You
        </h2>

        <p className="mt-4">
          <strong>Address:</strong> 123 Gift Street, Pune, India
        </p>

        <p>
          <strong>Phone:</strong> +91 9860737643
        </p>

        <p>
          <strong>Email:</strong>nikitachormale4242@gmail.com
        </p>

        {/* Google Map */}
        <h2 className="mt-8 text-xl font-semibold text-blue-800">
          Location
        </h2>

        <div className="mt-4 rounded-xl overflow-hidden shadow">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Pune,India&output=embed"
            className="w-full h-64 border-0"
            loading="lazy"
          />
        </div>

        <p className="text-gray-600">
          We are located in the heart of the city. Visit our store anytime!
        </p>

        {/* Form */}
        <h2 className="mt-8 text-xl font-semibold text-blue-800">
          Send Suggestion
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-3"
        >

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
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Send Message
          </button>

        </form>

      </div>
    </div>
  
    </>
  )
}

export default Contact