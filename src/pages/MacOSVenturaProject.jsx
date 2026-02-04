import React from 'react'
import "./ImageSliders.css"
import screenShot01 from "../assets/images/my-projects/mc01.png"
import screenShot02 from "../assets/images/my-projects/mc02.png"
import screenShot03 from "../assets/images/my-projects/mc05.png"
import screenShot05 from "../assets/images/my-projects/mc04.png"

function MacOSVenturaProject() {

  return (
    <div className='project-view-page-container'>
      <div className='Project-Title'>
        macOS Ventura UI Simulator
      </div>
      <br />
      <div className='med-text'>
        Designed and developed a web-based macOS UI using HTML, CSS, and JavaScript, with a focus on replicating the visual aesthetics and functionality of the macOS operating system. This project is an immersive experience that brings the look and feel of macOS to the web.
      </div>
      <br />
      <div className='project-links'>
        <a href='https://msingh17122000.github.io/macOS-Ventura-Simulator/' target="_blank" rel="noreferrer" className='read-more'>Live Project {'>'}</a>
        <a href='https://github.com/msingh17122000/macOS-Ventura-Simulator' target="_blank" rel="noreferrer" className='read-more'>GitHub Repository {'>'}</a>
      </div>
      <br /><br />
      <div className='med-heading sanf-bold'>Highlights</div>
      <div className='hint-text'>Scroll to right -{">"}</div>
      <div className='SlidesContainer'>
        <div className='ImageSliderContainer02 slides'>
          <div className='ImageTextContainer02'>
            <div className='SliderHeading02'>Dynamic Wallpapers</div>
            <div className='SliderText02'>Allows users to change the desktop background.</div>
          </div>
          <div className='SliderImageContainer02'>
            <img className="SliderImage02" src={screenShot02} alt="Project Screenshot 02" />
          </div>
        </div>
        <div className='ImageSliderContainer01 slides'>
          <div className='ImageTextContainer01'>
            <div className='SliderHeading'>Clean UI Experience</div>
            <div className='SliderText'>web app that emulates macOS Ventura's UI and features.</div>
          </div>
          <div className='SliderImageContainer'>
            <img className="SliderImage" src={screenShot01} alt="Project Screenshot" />
          </div>
        </div>
        <div className='ImageSliderContainer03 slides'>
          <div className='SliderImageContainer03'>
            <img className="SliderImage03" src={screenShot03} alt="Project Screenshot 03" />
          </div>
          <div className='ImageTextContainer03'>
            <div className='SliderHeading03'>macOS on any device</div>
            <div className='SliderText03'>Enjoy macOS UI on any Laptop device.</div>
          </div>
        </div>
        <div className='ImageSliderContainer04 slides'>
          <div className='SliderImageContainer04'>
            <img className="SliderImage04" src={screenShot05} alt="Project Screenshot 04" />
          </div>
          <div className='ImageTextContainer04'>
            <div className='SliderHeading04'>macOS Startup Screen</div>
            <div className='SliderText04'>Offers macOS boot Screen with pixel perfect replica.</div>
          </div>
        </div>
      </div>
      <div className="MyCarouselController" id="MyCarouselController">
        <div className="MyCarouselControllerContainer" id="MyCarouselControllerContainer"></div>
      </div>
      <br />
      <br />
      <div className='med-heading sanf-bold'>Features</div><br />
      <div className='med-text'>
        <span className='bold sec-black'>Layout Replication:</span> Painstakingly recreated the macOS interface, including the menu bar, desktop icons, and window management, achieving pixel-perfect accuracy.
        <br /><br />
        <span className='bold sec-black'>Dynamic Background:</span> Implemented a feature that allows users to change the desktop background, offering a personalized experience similar to macOS.
        <br /><br />
        <span className='bold sec-black'>Real-Time Clock and Date:</span>  Integrated a real-time clock and date display in the menu bar, ensuring that the website reflects the current time and date accurately.
        <br /><br />
        <span className='bold sec-black'>About Developer Tab:</span>  Developed an "About Developer" tab in the dock, providing information about the project, your role, and your contact details. It showcases your abilities while inviting user engagement.
        <br /><br />
      </div>
      <div className='med-heading sanf-bold'>Technologies Used</div><br />
      <div className='med-text'>
        <span className='bold sec-black'>HTML:</span> Structured the project's layout and content.<br /><br />
        <span className='bold sec-black'>CSS:</span> Styled the website to closely resemble the macOS design, including the menu bar, icons, and windows.<br /><br />
        <span className='bold sec-black'>JavaScript:</span> Implemented interactivity, including the dynamic background, real-time clock, and the "About Developer" tab.<br /><br />
      </div>
      <br />
      <div className='med-heading sanf-bold'>Outcome</div><br />
      <div className='med-text'>
        This project reflects my strong web development and design skills, as well as my attention to detail. By replicating the macOS interface and integrating interactive elements, I demonstrated my commitment to creating engaging and user-friendly web experiences.

        The macOS Simulator Website not only showcases my technical capabilities but also highlights my creativity in bringing a well-known desktop environment to the web. It serves as a testament to my ability to design and develop captivating user interfaces and interactive web applications.

        Feel free to adapt and expand upon this description to align with your specific achievements and experiences related to this project on your resume.
      </div>
      <br /><br /><br /><br />
    </div>
  )
}

export default MacOSVenturaProject