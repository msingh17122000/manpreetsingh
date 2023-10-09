import React from 'react'

import InstagramIcon from "../../assets/svg/social-links/instagram-svgrepo-com.svg"
import LinkedInIcon from "../../assets/svg/social-links/linkedin-rounded-svgrepo-com.svg"
import XIcon from "../../assets/svg/social-links/twitter-x-logo-black-square-rounded-20852.svg"
import SnapchatIcon from "../../assets/svg/social-links/snapchat-logo-7106.svg"
import GithubIcon from "../../assets/svg/social-links/iconmonstr-github-3.svg"

function SocialLinks() {
  return (
    <div>
        <div className='social-links-container'>
           <a href='https://www.instagram.com/msingh_2000/'target='_blank'><div className='social-links'><img src={InstagramIcon} alt="Instagram"/></div></a>
           <a href='https://www.linkedin.com/in/msingh2000/'target='_blank'><div className='social-links'><img src={LinkedInIcon} alt="LinkedIn"/></div></a>
           <a href='https://www.x.com/msingh_2000/'target='_blank'><div className='social-links'><img src={XIcon} alt="X-Twitter"/></div></a>
           <a href='https://www.snapchat.com/manpreets1813/'target='_blank'><div className='social-links'><img src={SnapchatIcon} alt="Snapchat"/></div></a>
           <a href='https://github.com/msingh17122000'target='_blank'><div className='social-links'><img src={GithubIcon} alt="Github"/></div></a>
        </div>
    </div>
  )
}

export default SocialLinks