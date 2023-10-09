import React from 'react'
import SocialLinks from '../components/SocialLinks/SocialLinks'
import MyPic from '../assets/images/IMG_1306.jpg'
import { useRef, useEffect } from 'react';
function AboutMe() {
    const myElementRef = useRef();

    useEffect(() => {
       
        const blurDivs= document.querySelectorAll(".blur-load")
        blurDivs.forEach(div => {
            const img=div.querySelector("img")
            function loaded()
            {
                div.classList.add("loaded")
            }
            if(img.complete)
            {
                loaded()
            }
            else{
                img.addEventListener("load",loaded)
            }
        })
    }, []);
    
  return (
    <div className='about-me-page'>
        <div className='aboutme-page-container no-bottom-padding margin-left'><div className='main-heading'>About me</div></div>
    <div className='aboutme-page-container margin-left'>
   
        
        <div className='left-side-pic'>
            <div className='blur-load'>
            <img src={MyPic}alt='Manpreet Singh'loading='lazy'/>
            </div>
        </div>
    <div className='right-section'>
        
        <div className='about-me-text'>
        Hi, I'm <span className='bold-text'>Manpreet Singh</span>, a passionate web developer with a flair for front-end design and a deep commitment to creating captivating user experiences. My journey into the world of web development started with a fascination for turning creative concepts into functional, user-friendly websites and applications.
        </div>
        <br/>
        <div className='medium-heading'>Front-End Expertise:</div>
        <div className='about-me-text'>
        With a solid foundation in front-end technologies, I specialize in crafting visually stunning and responsive user interfaces. My proficiency in HTML, CSS, and JavaScript allows me to bring designs to life while ensuring seamless performance across various devices and browsers. I'm dedicated to pixel-perfect precision, making sure that every detail contributes to a delightful user experience.
        </div>
        <br/><br/>
        <div className='medium-heading'>UI/UX Design Enthusiast:</div>
        <div className='about-me-text'>
        My passion extends beyond code; I thrive on crafting intuitive and aesthetically pleasing designs that resonate with users. I embrace the principles of user-centered design, striving to create interfaces that not only look great but also enhance usability. My design process involves wireframing, prototyping, and usability testing, ensuring that every project I undertake is rooted in data-driven decisions and empathy for the end user.
        </div>
        </div>
        </div>


<div className='aboutme-page-container margin-left'>

        <div className='right-section'>
        
       
        <div className='medium-heading'>Balancing Beauty and Functionality:</div>
        <div className='about-me-text'>
        I believe that exceptional design goes hand in hand with flawless functionality. Whether it's optimizing user workflows, enhancing accessibility, or ensuring a seamless mobile experience, I'm committed to finding the perfect balance between aesthetics and usability.
       </div>
        <br/><br/>
        <div className='medium-heading'>Constantly Evolving:</div>
        <div className='about-me-text'>
        In the ever-evolving world of web development, I remain committed to staying on the cutting edge. I eagerly explore emerging technologies and design trends to bring fresh ideas and innovation to my work. My dedication to continuous learning keeps me inspired and ready to tackle new challenges.
        </div>
        <br/><br/>
       </div>
        
      

           </div>

           <div className='center'>
                <div className='medium-heading'>Connect with Me</div>
                <br/>
                <SocialLinks/>
                <br/><br/>
            </div>
   
    
    </div>
  )
}

export default AboutMe