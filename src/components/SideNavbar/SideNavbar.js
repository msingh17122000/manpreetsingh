import React from 'react'
import "./SideNavbar.css"
import HomeIcon from '../../assets/svg/home-5-svgrepo-com.svg'
import WorkIcon from "../../assets/svg/project-icon.svg"
import SocialIcon from "../../assets/svg/network-backup-svgrepo-com.svg"
import ContactIcon from "../../assets/svg/contact-icon.svg"
import UserIcon from "../../assets/svg/user.svg"
import Logo from "../../assets/svg/ms-logo.svg"
import { Link } from 'react-router-dom'

function SideNavbar() {
  
  return (
    <div className='SideNavbar-Container'id='navbar'>
      <Link to="/"className='sidenav-links'><div className='portfolio-logo'><img src={Logo}alt='ms-logo'/></div></Link>
      <Link to="/"className='sidenav-links'><div className='SideNavbar-buttons'><img src={HomeIcon} alt='Home'/><div className='Sidebar-buttons-label'>Home</div></div></Link>
      <Link to="/about-me"className='sidenav-links'><div className='SideNavbar-buttons pink'><img src={UserIcon} alt='About me'/><div className='Sidebar-buttons-label'>About me</div></div></Link>
      <Link to="/projects"className='sidenav-links'><div className='SideNavbar-buttons pink'><img src={WorkIcon} alt='Projects'/><div className='Sidebar-buttons-label'>Projects</div></div></Link>
      <Link to="/contact"className='sidenav-links'><div className='SideNavbar-buttons pink'><img src={ContactIcon} alt='Home'/><div className='Sidebar-buttons-label'>Contact</div></div></Link>
      <Link to="/contact"className='sidenav-links'><div className='SideNavbar-buttons'><img src={SocialIcon} alt='Connect'/><div className='Sidebar-buttons-label'>Connect</div></div></Link>
      
    </div>
  )
}

export default SideNavbar