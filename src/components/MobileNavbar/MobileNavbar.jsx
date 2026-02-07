import React from 'react'
import { useEffect, useState } from "react"
import "./MobileNavbar.css"
import upArrow from "../../assets/svg/up-arrow.svg"
import NavbarLogo from '../../assets/svg/ms-logo.svg'
import { Link, NavLink } from 'react-router-dom'
function MobileNavbar() {
  const [isVisible, setIsVisible] = useState(false); // Initial visibility state
  const showMenu = () => {
    setIsVisible(!isVisible); //sets the value true
    if (!isVisible)//if its not visible then show menu
    {
      openMenu();
    }
    else { //else hide menu
      closeMenu();
    }
  };

  function closeMenu() {
    document.getElementById("LineOne").style.transform = "rotate(0deg)";
    document.getElementById("LineTwo").style.transform = "rotate(0deg)";
    setTimeout(() => {
      document.getElementById("LineOne").style.position = "relative";
      document.getElementById("LineTwo").style.position = "relative";

    }, 200);
    document.getElementById('MobileNavbarContainer').style.height = '45px';
    document.getElementById('SideNavbar-mobile').style.transform = 'translateY(-800px)';
    document.body.style.overflow = 'auto';
  }
  function openMenu() {
    document.getElementById("LineOne").style.transform = "rotate(45deg)";
    document.getElementById("LineTwo").style.transform = "rotate(-45deg)";
    document.getElementById("LineOne").style.position = "absolute";
    document.getElementById("LineTwo").style.position = "absolute";
    document.getElementById('MobileNavbarContainer').style.height = '100vh';
    document.getElementById('SideNavbar-mobile').style.transform = 'translateY(0px)';
    document.body.style.overflow = 'hidden';
  }


  return (
    <div className='MobileNavigationBar'>
      <div className='MobileNavbarContainer' id="MobileNavbarContainer">
        <div className='MobileNavbarSectionTop'>
          <div className='MobileNavbarLogo'><Link to='/'><img src={NavbarLogo} className='MobileNavbarLogoImage' id='MobileNavbarLogoImage' alt='Manpreet Singh Logo' /></Link></div>
          <div className='MobileNavbarHameMenuContainer'>
            <div className='MobileNavbarHamMenu' onClick={showMenu}>
              <div className='HamMenuLine' id='LineOne'></div>
              <div className='HamMenuLine' id='LineTwo'></div>
            </div>
          </div>
        </div>
        <div className='SectionExpand' id='SectionExpand'>
          <div className='SideNavbar-small' id='SideNavbar-mobile'>
            <NavLink to="/" className='sidenav-links' onClick={closeMenu}><div className='SideNavbar-buttons'><div className='Sidebar-buttons-label show'>Home</div></div></NavLink>
            <NavLink to="/about-me" className='sidenav-links' onClick={closeMenu}><div className='SideNavbar-buttons pink'><div className='Sidebar-buttons-label show'>About me</div></div></NavLink>
            <NavLink to="/my-projects" id='projects-btn' className='sidenav-links' onClick={closeMenu}><div className='SideNavbar-buttons pink'><div className='Sidebar-buttons-label show'>Projects</div></div></NavLink>
            <a href='https://drive.google.com/file/d/1wQMHOxo5UHAYS22ZsB1v7Js2-913VSD3/view?usp=drive_link' target="_blank" className='sidenav-links' onClick={closeMenu}><div className='SideNavbar-buttons'><div className='Sidebar-buttons-label show'>Resume</div></div></a>
            <NavLink to="/contact" className='sidenav-links'><div className='SideNavbar-buttons'><div className='Sidebar-buttons-label show' onClick={closeMenu}>Contact</div></div></NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNavbar