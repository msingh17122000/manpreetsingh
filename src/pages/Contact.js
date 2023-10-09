import React from 'react'

import "./Pages.css"

import SocialLinks from '../components/SocialLinks/SocialLinks'

function Contact() {
  return (
    <div className='aboutme-page-container flex-row '>
      <br/>
      <br/>
      <br/>
      <br/>
    <div className='main-content'>
    <div className='main-container no-padding'>
        
        <div className='main-heading'>Contact me</div>
        <div className='med-text'id='contact-me-text'>
        Feel free to reach out and get in touch with me. I'm always eager to connect, whether it's for potential collaborations, inquiries about my work, or just a friendly chat. Your feedback and questions are valuable, and I look forward to hearing from you soon!
        </div>
        <br/><br/>
        <a href = "mailto: manpreetsingh10720@gmail.com"className='send-mail-link'>Send Email</a>
        
      
        
        
    </div>
    </div>
    <div className='center'>
                <div className='medium-heading'>Connect with Me</div>
                <br/>
                <SocialLinks/>
            </div>
            <br/>
      <br/>
      <br/>
      <br/>
    </div>
  )
}

export default Contact