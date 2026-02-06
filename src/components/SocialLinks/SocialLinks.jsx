import React from 'react'

import InstagramIcon from "../../assets/svg/social-links/instagram-svgrepo-com.svg"
import LinkedInIcon from "../../assets/svg/social-links/linkedin-rounded-svgrepo-com.svg"
import XIcon from "../../assets/svg/social-links/twitter-x-logo-black-square-rounded-20852.svg"
import SnapchatIcon from "../../assets/svg/social-links/snapchat-logo-7106.svg"
import GithubIcon from "../../assets/svg/social-links/iconmonstr-github-3.svg"
import { FaGithub, FaInstagram, FaLinkedin, FaSnapchat } from 'react-icons/fa'
import { FaX, FaXTwitter } from 'react-icons/fa6'

function SocialLinks() {
  return (
    <div>
      <div className='max-w-[700px] mx-auto flex !mt-8  !gap-4'>
        <a href='https://www.instagram.com/msingh_2000/' target='_blank' rel="noreferrer"><div className='social-links hover:text-[#06c] '><FaInstagram size={26}/></div></a>
        <a href='https://www.linkedin.com/in/msingh2000/' target='_blank' rel="noreferrer"><div className='social-links hover:text-[#06c]'><FaLinkedin size={26}/></div></a>
        <a href='https://www.x.com/msingh_2000/' target='_blank' rel="noreferrer"><div className='social-links hover:text-[#06c]'><FaXTwitter size={26}/></div></a>
        {/* <a href='https://www.snapchat.com/manpreets1813/' target='_blank' rel="noreferrer"><div className='social-links hover:text-[#06c]'><FaSnapchat size={26}/></div></a> */}
        <a href='https://github.com/msingh17122000' target='_blank' rel="noreferrer"><div className='social-links hover:text-[#06c]'><FaGithub size={26}/></div></a>
      </div>
    </div>
  )
}

export default SocialLinks