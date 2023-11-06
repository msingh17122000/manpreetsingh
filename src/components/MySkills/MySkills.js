import React from 'react'

import "./MySkills.css"
import flutterLogo from "../../assets/svg/skills/flutter-logo.svg"
import HtmlLogo from "../../assets/svg/skills/html-logo.svg"
import CssLogo from "../../assets/svg/skills/css-logo.svg"
import JsLogo from "../../assets/svg/skills/js-logo.svg"
import PhpLogo from "../../assets/svg/skills/php-logo.svg"
import ReactLogo from "../../assets/svg/skills/react-logo.svg"
import MysqlLogo from "../../assets/svg/skills/mysql.svg"
import FigmaLogo from "../../assets/svg/skills/figma-svgrepo-com.svg"

function MySkills() {
    return (

        <div className='MySkills-Container'>
            <br />
            <div className='my-skills-heading' id='skills-heading'>My Skills</div>
            <div className='hint-text'>Scroll to right -{">"}</div>
         
            <div className='skills-container'>
                <div className='skills-box html-skill'>
                    <div className='skill-box-image'><img src={HtmlLogo} alt='HTML-logo' /></div>
                    <div className='skill-box-heading'>HTML</div><br/>
                    <div className='skill-box-text'>Proficient in writing clean, semantic HTML code and creating responsive web pages.</div>
                </div>
                
                <div className='skills-box css-skill'>
                    <div className='skill-box-image'><img src={CssLogo} alt='HTML-logo' /></div>
                    <div className='skill-box-heading'>CSS</div><br/>
                    <div className='skill-box-text'>Skilled in CSS for controlling the layout and styling of web pages.</div>
                </div>

                <div className='skills-box js-skill'>
                    <div className='skill-box-image'><img src={JsLogo} alt='HTML-logo' /></div>
                    <div className='skill-box-heading'>JavaScript</div><br/>
                    <div className='skill-box-text'>Strong understanding of JavaScript for developing dynamic and interactive web applications. </div>
                </div>

                <div className='skills-box react-skill'>
                    <div className='skill-box-image'><img src={ReactLogo} alt='HTML-logo' /></div>
                    <div className='skill-box-heading'>React.js</div><br/>
                    <div className='skill-box-text'>Experienced in developing dynamic and interactive user interfaces with React.</div>
                </div>

                <div className='skills-box figma-skill'>
                    <div className='skill-box-image'><img src={FigmaLogo} alt='HTML-logo' /></div>
                    <div className='skill-box-heading'>Figma</div><br/>
                    <div className='skill-box-text'>Skilled in using Figma for designing user interfaces and creating interactive prototypes. </div>
                </div>

                <div className='skills-box flutter-skill'>
                    <div className='skill-box-image'><img src={flutterLogo} alt='HTML-logo' /></div>
                    <div className='skill-box-heading'>Flutter</div><br/>
                    <div className='skill-box-text'>Skilled in developing mobile applications with Flutter, offering a consistent and expressive user interface across multiple platforms.</div>
                </div>

                <div className='skills-box php-skill'>
                    <div className='skill-box-image'><img src={PhpLogo} alt='HTML-logo' /></div>
                    <div className='skill-box-heading'>PHP</div><br/>
                    <div className='skill-box-text'>Proficient in server-side scripting with PHP, including creating dynamic web pages, and interacting with databases.</div>
                </div>

                <div className='skills-box mysql-skill'>
                    <div className='skill-box-image'><img src={MysqlLogo} alt='HTML-logo' /></div>
                    <div className='skill-box-heading'>MySQL</div><br/>
                    <div className='skill-box-text'>Proficient in designing and optimizing relational databases using MySQL.</div>
                </div>
            </div>
            <br />
        </div>

    )
}

export default MySkills