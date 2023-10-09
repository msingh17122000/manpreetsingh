import React from 'react'
import { Link } from 'react-router-dom'

import "./ContactMeBtn.css"

function ContactMeBtn() {
  return (
    <Link className='ContactMe-btn'to="/contact">

     Contact me
     
        </Link>
    
  )
}

export default ContactMeBtn