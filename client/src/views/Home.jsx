import React from 'react'
import { useEffect } from 'react'
import { setPageTitle } from "../utils.jsx"
import Navbar from '../components/Navbar.jsx'
import Category from '../components/CategorySection.jsx'
import Video from '../components/VideoSection.jsx'
import OccasionSection from '../components/OccasionSection.jsx'
import  PopularGifting from '../components/PopularGifting.jsx'
import Personalise from '../components/Personalise.jsx'

function Home() {
     useEffect(() => {
    setPageTitle("GiftForYou-Home")
  }, [])
  return (
    <>
    <Navbar />
    <div>
      <Video />
      <Category />
      <OccasionSection />
      <PopularGifting />
      <Personalise />
    </div>
    </>

    
  )
}

export default Home