import React from 'react'
import "./ToggleButton.css"
import { useState } from 'react';
function ToggleButton() {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const ToggleThemeSwitch = () => {
        var CurrentUrl = window.location.pathname;
        var ToggleCircle = document.getElementById('ToggleCircle');
        var Body = document.body;
        var Navbar = document.getElementById('Navbar');
        var ToggleButtonBackground = document.getElementById('ToggleButtonBackground');
        var LogoImage = document.getElementById('LogoImage');

        if (isDarkTheme) {
            ToggleCircle.style.transform = 'TranslateX(0px)';
            // Body.classList.toggle('Light');
            Body.classList.remove('Dark');
            Navbar.classList.remove('Dark-Nav');
            ToggleButtonBackground.style.backgroundColor = "#FFFDC3";
            ToggleCircle.style.backgroundColor = '#FFE72B';
            LogoImage.style.filter = 'Invert(0)';
        }
        else {
            ToggleCircle.style.transform = 'TranslateX(24px)';
            Body.classList.add('Dark');
            Navbar.classList.add('Dark-Nav');
            ToggleButtonBackground.style.backgroundColor = "#2A2A2A";
            ToggleCircle.style.backgroundColor = 'white';
            LogoImage.style.filter = 'Invert(1)';
        }

        setIsDarkTheme((LightTheme) => !isDarkTheme);
    };

    if(isDarkTheme){
        
    }
    else{
    }
    return(
        <div className='ToggleButtonContainer' id="toggleThemeSwitch" onClick={ToggleThemeSwitch}>
                <div className='ToggleButtonBackground' id="ToggleButtonBackground">
                <div className='ToggleCircle' id='ToggleCircle'></div>
                </div>
            </div>
    )

}
export default ToggleButton