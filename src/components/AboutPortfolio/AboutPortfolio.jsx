import React, { useState } from 'react'
import "./AboutPortfolio.css"
import iPhoneScreenshot from "../../assets/images/my-projects/Group 14.png"
import iPhoneScreenshot02 from "../../assets/images/my-projects/Group 15.png"
import githubLogo from "../../assets/svg/social-links/iconmonstr-github-3.svg"
function AboutPortfolio() {
    const [showImage01, setShowImage01] = useState(true);
    const [showImage02, setShowImage02] = useState(false);
    function showFirstImage() {
        setShowImage01(true);
        setShowImage02(false);
    }
    function showSecondImage() {
        setShowImage01(false);
        setShowImage02(true);
    }
    return (
        <div className='AboutPortfolioContainer' id="AboutPortfolioContainer">
            <div className='AboutPortfolioSectionLeft'>
                <div className='light-darkDotsContainer'>
                    <div className='darkModeCircle' onClick={showFirstImage}></div>
                    <div className='lightModeCircle' onClick={showSecondImage}></div>
                </div>
                {showImage01 && <img src={iPhoneScreenshot} alt="iphone Screenshot" id='portfolioImage01' />}
                {showImage02 && <img src={iPhoneScreenshot02} alt="iphone Screenshot" id='portfolioImage02' />}
            </div>
            <div className='AboutPortfolioSectionRight'>
                <br /><div className='portfolioHeading' id="portfolioHeading">
                    Portfolio Design
                </div>
                <div className='portfolioText' id='portfolioText'>
                    Crafting digital experiences that leave a lasting impression, one pixel at a time.
                </div>
                <br />
                <div className='githubLink'>
                    <a href="https://github.com/msingh17122000/manpreetsingh" className="github-link" id="github-link" target='_blank' rel="noreferrer">
                        <img src={githubLogo} alt='github logo' id="githubLogo" />
                        Github
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AboutPortfolio