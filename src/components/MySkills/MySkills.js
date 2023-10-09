import React from 'react'

import "./MySkills.css"
import flutterLogo from "../../assets/svg/flutter-logo.svg"
import HtmlLogo from "../../assets/svg/html-logo.svg"
import CssLogo from "../../assets/svg/css-logo.svg"
import JsLogo from "../../assets/svg/js-logo.svg"
import PhpLogo from "../../assets/svg/php-logo.svg"
import ReactLogo from "../../assets/svg/react-logo.svg"
import MysqlLogo from "../../assets/svg/mysql-logo.svg"

function MySkills() {
  return (
    <div className='main-container'>
        <div className='MySkills-Container'>
            <div className='my-skills-heading'id='skills-heading'>My Skills</div>
            <br/><br/>
            <div className='skills-container'>
                <div className='skills-box'>
                    <div className='skill-box-image'><img src={HtmlLogo} alt='Flutter-logo'/></div>
                    <div className='skill-box-heading'>HTML</div>
                </div>
                <div className='skills-box'>
                    <div className='skill-box-image'><img src={CssLogo} alt='Flutter-logo'/></div>
                    <div className='skill-box-heading'>CSS</div>
                </div>
                <div className='skills-box'>
                    <div className='skill-box-image'><img src={JsLogo} alt='Flutter-logo'/></div>
                    <div className='skill-box-heading'>JavaScript</div>
                </div>
                <div className='skills-box'>
                    <div className='skill-box-image'><img src={ReactLogo} alt='Flutter-logo'/></div>
                    <div className='skill-box-heading'>React.js</div>
                </div>
                <div className='skills-box'>
                    <div className='skill-box-image'><img src={flutterLogo} alt='Flutter-logo'/></div>
                    <div className='skill-box-heading'>Flutter</div>
                </div>
                <div className='skills-box'>
                    <div className='skill-box-image'><img src={PhpLogo} alt='Flutter-logo'/></div>
                    <div className='skill-box-heading'>Php</div>
                </div>
                <div className='skills-box'>
                    <div className='skill-box-image'><img src={MysqlLogo} alt='Flutter-logo'id='mysql-img'/></div>
                    <div className='skill-box-heading'>MySQL</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MySkills