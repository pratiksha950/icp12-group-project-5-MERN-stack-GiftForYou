import Navbar from "../components/Navbar"
import { useState } from "react";
import SubHeading from '../components/SubHeading';
import Heading from '../components/Heading';
import Button from '../components/Button';
import SuggestionImg from "../assets/contactImg/sendsuggestion.png";
import { MapPinCheck, PhoneCall, MailCheck } from "lucide-react";
import { Link } from 'react-router';
import { useEffect } from "react";
import { setPageTitle } from "../utils.jsx";
import Footer from '../components/Footer.jsx';
import Facebook from '../assets/contactImg/facebook.png'
import Instagram from '../assets/contactImg/insta.png'
import Linkedin from '../assets/contactImg/linkedin.png'
import Twitter from '../assets/contactImg/twitters.png'
import Youtube from '../assets/contactImg/youtube.png'

function Contact() {
  useEffect(() => {
    setPageTitle("GiftForYou- Contact");
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/suggestion`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };
  return (
    <div>
      <Navbar />

      <div className=" mx-auto px-6 py-10">
        <Heading text="Contact Us" />

        <div className='md:gap-10 md:mx-30 flex flex-col md:flex-row mt-3 mb-10'>

          <Link to="https://www.google.com/maps?q=Pune,India&output=embed"
            className="mt-4 border bg-white p-4 rounded-lg shadow md:w-100 hover:transition hover:shadow-lg hover:scale-105 cursor-pointer">
            <div className='flex flex-col items-center gap-2 mb-2'>
              <MapPinCheck className='text-pink-500' /><span className="font-semibold">Address</span>
            </div>
            <p className='text-center'>123 Gift Street, Pune, India</p>
          </Link>

          <Link to="tel:+919860737643" className="mt-4 border bg-white p-4 rounded-lg shadow md:w-100 hover:transition hover:shadow-lg hover:scale-105 cursor-pointer">
            <div className='flex flex-col items-center gap-2 mb-2'>
              <PhoneCall className='text-pink-500' /><span className="font-semibold">Mobile No.</span>
            </div>
            <p className='text-center'>+91 9860737643</p>
          </Link>

          <Link to="mailto:giftforyou@gmail.org" className="mt-4 border bg-white p-4 rounded-lg shadow md:w-100 hover:transition hover:shadow-lg hover:scale-105 cursor-pointer">
            <div className='flex flex-col items-center gap-2 mb-2'>
              <MailCheck className='text-pink-500' /><span className="font-semibold">Email Id</span>
            </div>
            <p className='text-center'>giftforyou@gmail.org</p>
          </Link>
        </div>

        <SubHeading text="Follow us" className="mt-10" />

        <div className="flex gap-4 justify-center mt-3 mb-10">
          <Link to="https://www.facebook.com/"><img src={Facebook} alt='facebook' className='w-10 hover:scale-110 transition' /></Link>
          <Link to="https://www.instagram.com/"><img src={Instagram} alt='Instagram' className='w-10 hover:scale-110 transition' /></Link>
          <Link to="https://in.linkedin.com/"><img src={Linkedin} alt='Linkedin' className='w-10 hover:scale-110 transition' /></Link>
          <Link to="https://x.com/"><img src={Twitter} alt='Twitter' className='w-10 hover:scale-110 transition' /></Link>
          <Link to="https://www.youtube.com/"><img src={Youtube} alt='Youtube' className='w-10 hover:scale-110 transition' /></Link>
        </div>

        <SubHeading text="location" />

        <div className="mt-4 rounded-xl overflow-hidden shadow md:mx-10">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Pune,India&output=embed"
            className="w-full h-100 border-0"
            loading="lazy"
          />
        </div>

        <p className="text-gray-600 text-center">
          We are located in the heart of the city. Visit our store anytime!
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-3 max-w-200 bg-white p-6 rounded-lg shadow m-auto"
        >

          <div className="flex flex-col md:flex-row gap-6 items-center">

            <div className='flex'>
              <img src={SuggestionImg} alt="Send Suggestion" className="w-full h-60 md:h-80 object-cover rounded-lg" />
            </div>
            <div className='w-full md:w-1/2 flex flex-col gap-3'>
              <h2 className="mt-2 text-2xl font-semibold text-black-800 text-center ">
                Send Suggestion
              </h2>

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

              <Button
                title="Send Message"
                varient="pink"
                size="md"
              />
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Contact