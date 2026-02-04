import React from 'react'

import "./AboutSection.css"

import ContactMeBtn from '../ContactMeBtn/ContactMeBtn'
import { Link } from 'react-router-dom'

function AboutSection() {

  return (

        <div className='main-container'>
            <div className='fullscreen-section'id="home">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className='med-heading'>Hey, I'm</div>
            <div className='main-heading'><span>Manpreet Singh</span></div>
            <div className='med-heading'>Front End Developer & UI/UX Designer</div>
            <br/>
            <br/>
            <br/>
            <ContactMeBtn/>
            <br/>
            <br/>
            <br/>
            </div>
            <div className='about-section'>
            <div className='small-heading'id='about-me-heading'>About me </div>
            <br/>
            <div className='med-text'id='about-text'>
            I'm a passionate web developer with a flair for front-end design and a deep commitment to creating captivating user experiences. My journey into the world of web development started with a fascination for turning creative concepts into functional, user-friendly websites and applications.
            <br/><br/>
            I'm always eager to take on new challenges and stay up-to-date with the latest trends and technologies in the ever-evolving tech landscape. Problem-solving and attention to detail are my strengths, and I'm committed to delivering projects that exceed expectations.
            </div>
            <br/><br/>
            <Link to="/about-me"className='read-more'> Read more {'>'} </Link>

            </div>
        </div>
        
   
  )
}


export default AboutSection