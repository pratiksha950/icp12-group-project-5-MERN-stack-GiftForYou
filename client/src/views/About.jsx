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



function About() {

       useEffect(() => {
    setPageTitle("About-GiftForYou")
  }, [])
  const [review, setReview] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem("reviews");
    return saved ? JSON.parse(saved) : [
      "Amazing gifts and fast delivery!",
      "Beautiful packaging and quality products!"
    ];
  });

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const reviewContainerRef = useRef(null);

  useEffect(() => {
  if (reviewContainerRef.current && reviews.length > 4) {
    reviewContainerRef.current.scrollTo({
      top: reviewContainerRef.current.scrollHeight,
      behavior: "smooth"
    });
  }
}, [reviews]);

  const handleAddReview = () => {
    if (review.trim() === "") return;

    if (editIndex !== null) {
      const updated = [...reviews];
      updated[editIndex] = review;
      setReviews(updated);
      setEditIndex(null);
    } else {
      setReviews([...reviews, review]);
    }

    setReview("");
  };

  const handleDelete = (index) => {
    const filtered = reviews.filter((_, i) => i !== index);
    setReviews(filtered);
  };

  const handleEdit = (index) => {
    setReview(reviews[index]);
    setEditIndex(index);
  };

  return (
    <>
    <Navbar />

  <div className="min-h-screen w-full py-12 px-4 bg-[#f5f3ff]">
    
    <div className="">

      <div className="text-center mb-12">
       
        <Heading text="Welcome to Our Store"/>

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
        <SubHeading text="Customer Reviews"/>
        <div
  ref={reviewContainerRef}
  className={`rounded-xl p-6 space-y-4 transition-all
  ${reviews.length > 3 ? "max-h-72 overflow-y-auto pr-2" : ""}`}>
          {reviews.map((r, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-white p-4 rounded-xl shadow "
            >
              <span>⭐ {r}</span>

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
                  onClick={() => handleDelete(i)}
                />
              </div>
            </div>
          ))}
        </div>


        <div className="mt-6 flex gap-3">
          <input
            type="text"
            placeholder="Write review..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleAddReview}
            className="bg-pink-600 text-white px-6 rounded-lg hover:bg-blue-800 transition"
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>
      </div>

    </div>
  </div>
  </>
  
);

}

export default About
