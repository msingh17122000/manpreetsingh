import React from 'react'
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom'
import NavbarLogo from '../../assets/svg/ms-logo.svg'
import LightDarkButton from '../LightDarkButton/LightDarkButton'
function Navbar() {
  return (
    <div className='Navbar-Container'id="Navbar">
        <div className='Navbar-Left'>
        <Link to='/'><div className='Navbar-Logo'><img src={NavbarLogo}id="LogoImage"/></div></Link>
        </div>
        <div className='Navbar-Center'>
        <div className='Navbar-Links'>
                <NavLink to='/'className='Nav-Link'><div >Home</div></NavLink>
                <NavLink to='/about-me'className='Nav-Link'><div>About me</div></NavLink>
                <NavLink to='/my-projects'className='Nav-Link'><div>Projects</div></NavLink>
                <a href='https://drive.google.com/file/d/1wQMHOxo5UHAYS22ZsB1v7Js2-913VSD3/view?usp=drive_link'target="_blank"className='Nav-Link'><div>Resume</div></a>
                <NavLink to='/contact'className='Nav-Link'><div>Contact</div></NavLink>
            </div>
        </div>
            
        
        <div className='Navbar-Right'>
            <LightDarkButton/>
        </div>
    </div>
  )
}

export default Navbar