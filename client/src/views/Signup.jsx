import React from 'react'
import { useEffect } from 'react'
import { setPageTitle } from "../utils.jsx"

function Signup() {
  useEffect(() => {
    setPageTitle("SignUp-GiftForYou")
  }, [])

  return (
    <div>signUp</div>
  )
}

export default Signup
