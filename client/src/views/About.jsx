import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { setPageTitle } from "../utils.jsx"
import Button from '../components/Button.jsx'
import SubHeading from '../components/SubHeading.jsx'
import Navbar from '../components/Navbar.jsx'
import Heading from '../components/Heading.jsx'
import TeamSection from '../components/TeamSection.jsx'
import PopularGifting from "../components/PopularGifting.jsx"
import Footer from '../components/Footer.jsx'
import axios from 'axios'
import Input2 from '../components/Input2.jsx'

function About() {
  useEffect(() => {
    setPageTitle("About-GiftForYou")
  }, [])

  const [review, setReview] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/reviews`)
      .then(res => setReviews(res.data.data))
  }, []);

  const reviewContainerRef = useRef(null);

  useEffect(() => {
    if (reviewContainerRef.current && reviews.length > 4) {
      reviewContainerRef.current.scrollTo({
        top: reviewContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [reviews]);

  const handleAddReview = async () => {
    if (!review.trim()) return;

    if (editIndex !== null) {
      const id = reviews[editIndex]._id;

      await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/reviews/${id}`,
        { message: review }
      );

    } else {
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/reviews`,
        { message: review }
      );
    }

    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/reviews`);
    setReviews(response.data.data);

    setReview("");
    setEditIndex(null);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/reviews/${id}`);
    setReviews(reviews.filter(r => r._id !== id));
  };

  const handleEdit = (index) => {
    setReview(reviews[index].message);
    setEditIndex(index);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full py-12 px-4 bg-[#f5f3ff]">
        <div>
          <div className="text-center mb-12">

            <Heading text="Welcome to Our Store" />

            <p className="text-gray-600 mb-3 md:text-xl">
              Gift For You helps you find the perfect gift for every occasion.
            </p>

            <PopularGifting />

            <p className="text-gray-600 leading-relaxed mb-3 md:text-xl">
              Gift For You is a unique online gift shop designed to help you find the perfect
              present for your loved ones. We provide a wide variety of gifts suitable for
              different occasions and special moments.
            </p>

            <p className="text-gray-600 leading-relaxed md:text-xl">
              Our mission is to make gifting easy, joyful, and memorable.
              Whether you are celebrating love, friendship, or milestones,
              we have something special for everyone.
            </p>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold philosopher-regular mb-6 text-pink-600">
              Vision & Mission
            </h2>

            <p className="text-gray-600 leading-relaxed mb-3 md:text-xl">
              <span className="font-semibold">Vision:</span>
              Our vision is to become the most trusted and loved online gift store, connecting people through meaningful and memorable gifts. We aim to create a platform where every gift tells a story, expresses emotions, and strengthens relationships.

              <br /><br />

              <span className="font-semibold">Mission:</span>
              Our mission is to deliver happiness through thoughtful, creative, and personalized gift collections. We strive to provide high-quality products, unique designs, and excellent customer service to make every celebration special. We are committed to spreading joy, love, and smiles through every gift we deliver.
            </p>
            <TeamSection />
          </div>

          <div>
            <SubHeading text="Customer Reviews" />
            <div
              ref={reviewContainerRef}
              className={`rounded-xl p-6 space-y-4 transition-all
  ${reviews.length > 3 ? "max-h-72 overflow-y-auto pr-2" : ""}`}>
              {reviews?.map((r, i) => (
                <div
                  key={r._id}
                  className="flex justify-between items-center bg-white p-4 rounded-xl shadow "
                >
                  <span>⭐ {r.message}</span>

                  <div className="flex space-x-2">
                    <Button
                      title="Edit"
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(i)}
                    />
                    <Button
                      title="Delete"
                      size="sm"
                      variant="danger"
                      onClick={() => handleDelete(r._id)}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex gap-3 ">
              <Input2
                type="text"
                placeholder="Write review..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />

              <button
                onClick={handleAddReview}
                className="bg-pink-500 text-white px-6 rounded-lg hover:bg-pink-600 transition"
              >
                {editIndex !== null ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About
