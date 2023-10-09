import React from 'react'
import {useEffect,useState} from "react"
import "./MobileNavbar.css"

import HomeIcon from '../../assets/svg/home-5-svgrepo-com.svg'
import WorkIcon from "../../assets/svg/project-icon.svg"
import SocialIcon from "../../assets/svg/network-backup-svgrepo-com.svg"
import ContactIcon from "../../assets/svg/contact-icon.svg"
import UserIcon from '../../assets/svg/user.svg'
import { Link } from 'react-router-dom'


function MobileNavbar() {


    const [isVisible, setIsVisible] = useState(false); // Initial visibility state

    const showMenu = () => {
    //     setTimeout(()=>{
    //         document.getElementById('projects-btn').addEventListener('click',()=>{
    //          console.log(!isVisible);
    //              setIsVisible(false)
    //              showMenu();
    //          });
    //              }, 800);
    // console.log(isVisible);
      
      setIsVisible(!isVisible); //sets the value true
      console.log(isVisible);
      if(!isVisible)//if its not visible then show menu
      {
      document.getElementById("ham-menu").style.transform = "rotate(90deg)";
      document.getElementById("top-line").style.transform = "rotate(45deg)";
      document.getElementById("bottom-line").style.transform = "rotate(-45deg)";
      document.getElementById("middle-line").style.display = "none";
      document.getElementById("top-line").style.position = "absolute";
      document.getElementById("bottom-line").style.position = "absolute";
      setTimeout(()=>{
      document.getElementById('slide-anim').style.transform='scale(200)';
        }, 100);
      document.getElementById('slide-anim').style.display='block';

 


    }
      else{ //else hide menu
        
        document.getElementById("top-line").style.transform = "rotate(0deg)";
        document.getElementById("bottom-line").style.transform = "rotate(0deg)";
        document.getElementById('slide-anim').style.transform='scale(0)';
        document.getElementById("ham-menu").style.transform = "rotate(0deg)";
        setTimeout(()=>{
            document.getElementById("middle-line").style.display = "block";
            document.getElementById("top-line").style.position = "relative";
            document.getElementById("bottom-line").style.position = "relative";
           
        }, 200);


      }
 
    
      
    };



  return (
    <div>
        <div className='ham-menu'onClick={showMenu}id='ham-menu'>
            <div className='ham-menu-lines-container'>
                <div className='ham-menu-slide-animation'id='slide-anim'></div>
                <div className='ham-menu-lines' id='top-line'></div>
                <div className='ham-menu-lines'id='middle-line'></div>
                <div className='ham-menu-lines'id='bottom-line'></div>
            </div>
        </div>
        {isVisible && 
        <div className='SideNavbar-small'id='SideNavbar-mobile'>
            <Link to="/"className='sidenav-links'><div className='SideNavbar-buttons'><img src={HomeIcon} alt='Home'/><div className='Sidebar-buttons-label show'>Home</div></div></Link>
            <Link to="/about-me"className='sidenav-links'><div className='SideNavbar-buttons'><img src={UserIcon} alt='About me'/><div className='Sidebar-buttons-label show'>About me</div></div></Link>
            <Link to="/"id='projects-btn'className='sidenav-links'><div className='SideNavbar-buttons pink'><img src={WorkIcon} alt='Projects'/><div className='Sidebar-buttons-label show'>Projects</div></div></Link>
            <Link to="/contact"className='sidenav-links'><div className='SideNavbar-buttons pink'><img src={ContactIcon} alt='Home'/><div className='Sidebar-buttons-label show'>Contact</div></div></Link>
            <Link to="/contact"className='sidenav-links'><div className='SideNavbar-buttons'><img src={SocialIcon} alt='Connect'/><div className='Sidebar-buttons-label show'>Connect</div></div></Link>
            
    
        </div>
        }
    </div>
  )
}

export default MobileNavbar