import React from 'react'
import { useEffect } from 'react'
import { setPageTitle } from "../utils.jsx"


function About() {
       useEffect(() => {
    setPageTitle("About-GiftForYou")
  }, [])

  return (
    <div>About</div>
  )
}

export default About