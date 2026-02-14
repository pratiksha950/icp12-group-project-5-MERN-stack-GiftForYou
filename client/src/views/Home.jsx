import React from 'react'
import { useEffect } from 'react'
import { setPageTitle } from "../utils.jsx"


function Home() {
     useEffect(() => {
    setPageTitle("Home-GiftForYou")
  }, [])
  return (

    <div>Home</div>
  )
}

export default Home