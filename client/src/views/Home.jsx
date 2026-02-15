import React from 'react'
import { useEffect } from 'react'
import { setPageTitle } from "../utils.jsx"
import Navbar from '../components/Navbar.jsx'
import Category from '../components/CategorySection.jsx'
import Video from '../components/VideoSection.jsx'
import OccasionSection from '../components/OccasionSection.jsx'


function Home() {
     useEffect(() => {
    setPageTitle("Home-GiftForYou")
  }, [])
  return (
    <>
    <Navbar />
    <div>
      <Video />
      <Category />
      <OccasionSection />
    </div>
    </>

    
  )
}

export default Home