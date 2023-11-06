import React from 'react'
import { Link } from 'react-router-dom'

import "./ContactMeBtn.css"

function ContactMeBtn() {
  return (
    <Link className='ContactMe-btn'to="/contact"id='contact-me-btn'>

     Contact me
     
        </Link>
    
  )
}

export default ContactMeBtn