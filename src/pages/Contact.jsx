import React from 'react'

import "./Pages.css"

import SocialLinks from '../components/SocialLinks/SocialLinks'
import { IoIosMail } from 'react-icons/io'
import { LuMail } from 'react-icons/lu'

function Contact() {
  return (
    <div className='px-4 py-2 max-w-[1200px] mx-auto'>
    <div className='aboutme-page-container flex-row '>
      <br/>
      <br/>
      <br/>
      <br/>
    
    <div className='main-container '>
        
        <h1 className='text-5xl font-[500] mb-8'>Contact me</h1>
        <div className='med-text'id='contact-me-text'>
        Feel free to reach out and get in touch with me. I'm always eager to connect, whether it's for potential collaborations, inquiries about my work, or just a friendly chat. Your feedback and questions are valuable, and I look forward to hearing from you soon!
        </div>
        <br/>
        <a href = "mailto: manpreetsingh10720@gmail.com"className='bg-[#f5f5f7] text-[#06c] text-sm hover:bg-[#efefef] flex gap-2 items-center w-fit font-[400] px-4 py-3 rounded-full'>Send Email </a>
        
      
        
        
    </div>
    </div>
    <div className=' mt-6'>
                {/* <div className='text-2xl font-[500] mb-4'>Connect with Me</div> */}
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