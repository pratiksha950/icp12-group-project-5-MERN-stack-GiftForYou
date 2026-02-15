import React from 'react'
import { useEffect } from 'react'
import { setPageTitle } from "../utils.jsx"
import Navbar from '../components/Navbar.jsx'
import Category from '../components/CategorySection.jsx'
import Video from '../components/VideoSection.jsx'
import OccasionSection from '../components/OccasionSection.jsx'
import TeamSection from '../components/TeamSection.jsx'


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
      <TeamSection />
    </div>
    </>

    
  )
}

export default Home