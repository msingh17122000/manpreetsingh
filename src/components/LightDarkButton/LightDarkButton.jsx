import React from 'react'
import "./LightDarkButton.css"
import ButtonIcon from "../../assets/svg/lightdarkbutton.svg"
import {useEffect,useState} from "react"
function LightDarkButton() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const ToggleThemeSwitch = () => {
        var Body = document.body;
        var Navbar = document.getElementById('Navbar');
        var LogoImage = document.getElementById('LogoImage');
        var MobileNavbar=document.getElementById('MobileNavbarContainer');
        var MobileNavbarLogo=document.getElementById('MobileNavbarLogoImage');
        var MobileNavBarLineOne=document.getElementById('LineOne');
        var MobileNavBarLineTwo=document.getElementById('LineTwo');
        if (isDarkTheme) 
        {   //For Light Theme
            Body.classList.remove('Dark');
            Navbar.classList.remove('Dark-Nav');
            LogoImage.style.filter = 'Invert(0)';
            MobileNavbar.classList.remove('Dark-Nav');
            MobileNavbarLogo.style.filter='Invert(0)';
            MobileNavBarLineOne.style.backgroundColor='black';
            MobileNavBarLineTwo.style.backgroundColor='black';
            document.getElementById('SideNavbar-mobile').classList.remove('dark-menu');
        }
        else 
        {   //For Dark Theme
            LogoImage.style.filter = 'Invert(1)';
            Body.classList.add('Dark');
            Navbar.classList.add('Dark-Nav');
            MobileNavbar.classList.add('Dark-Nav');
            MobileNavbarLogo.style.filter='Invert(1)';
            MobileNavBarLineOne.style.backgroundColor='white';
            MobileNavBarLineTwo.style.backgroundColor='white';
            document.getElementById('SideNavbar-mobile').classList.add('dark-menu');
        }
        setIsDarkTheme((LightTheme) => !isDarkTheme);
    };


  return (
    <div className='SwitchThemeButton'id='ThemeSwitchButton' onClick={ToggleThemeSwitch}>
        <img src={ButtonIcon} alt='Switch Theme' />
    </div>
  )
}

export default LightDarkButton