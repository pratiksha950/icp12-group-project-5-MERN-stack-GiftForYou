import React from 'react'
import { useEffect } from 'react'
import { setPageTitle } from "../utils.jsx"
import Navbar from '../components/Navbar.jsx'


function Home() {
     useEffect(() => {
    setPageTitle("Home-GiftForYou")
  }, [])
  return (
    <>
    <Navbar />
    <div>Home</div>
    </>

    
  )
}

export default Home