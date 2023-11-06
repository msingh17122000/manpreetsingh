import React from 'react'
import { Link } from 'react-router-dom'
import "./Pages.css"
import myproject01thumb from "../assets/images/my-projects/mc01.png"
import myproject02 from "../assets/images/my-projects/myproject02.png"
import myproject03 from "../assets/images/my-projects/myproject03.png"
import myproject04 from "../assets/images/my-projects/image-carousel01.png"

function MyProjectsPage() {
  return (
    <div className='main-content'>

      <br /><br />
      <br />
      <div className='MyProjects-Container'>
        <div className='main-heading center'>My Projects</div>

        <div className='Project-Section' id="Project-Section-01">
          <div className='Project-Section-Left'>
            <div className='Project-Title black-text'>macOS Ventura UI</div>
            <br />
            <div className='Project-Description black-text'> The macOS Ventura UI is a web-based application that
              replicates the user interface and functionalities of the macOS Ventura operating
              system using HTML, CSS, and JavaScript. This project was conceived as an
              exploration into front-end web development, aiming to recreate the aesthetics
              and interactions of the macOS Ventura experience within a web browser.</div>
            <br />
            <Link to="/my-projects/macOS-ventura-simulator" className='Project-read-more'>Read more {'>'}</Link>
          </div>
          <div className='Project-Section-Right'><img src={myproject01thumb} alt='macOs Ventura Project Screenshot' /></div>
        </div>
        <div className='Project-Section' id="Project-Section-02">
          <div className='Project-Section-Left'>
            <div className='Project-Title white'>iOS 16.2 Home Screen Replica</div>
            <br />
            <div className='Project-Description white'> Designed and implemented an accurate replica of the iOS 16 home screen layout using HTML and CSS. This project aimed to showcase my proficiency in web design by replicating the visual aesthetics and layout of a popular mobile operating system.</div>
            <br />
            <Link to="/my-projects/iOS-16.2-Replica" className='Project-read-more'>Read more {'>'}</Link>
          </div>
          <div className='Project-Section-Right'><img src={myproject03} alt='iOS 16.2 Screen Layout' /></div>
        </div>
        <div className='Project-Section' id="Project-Section-03">
          <div className='Project-Section-Left'>
            <div className='Project-Title black-text'>Vintage Computer Simulator</div>
            <br />
            <div className='Project-Description black-text'> Designed and developed a captivating Vintage Computer Simulator using HTML, CSS, and JavaScript, combining nostalgia with modern web technologies. The project faithfully emulates the aesthetics and functionality of a vintage computer system, offering a unique user experience.
            </div>
            <br />
            <Link to="/my-projects/Vintage-Computer-Simulator" className='Project-read-more'>Read more {'>'}</Link>
          </div>
          <div className='Project-Section-Right'><img src={myproject02} alt='Vintage Computer Design' /></div>
        </div>
        <br/>
        <div className='main-heading center'>Components</div>
        <div className='Project-Section' id="Project-Section-04">
          <div className='Project-Section-Left'>
            <div className='Project-Title black-text'>Smooth Image Carousel</div>
            <br />
            <div className='Project-Description black-text'>
            Designed and implemented an interactive image carousel using HTML, CSS, and JavaScript to elevate the visual appeal.
            Users can seamlessly navigate through the carousel using "Next" and "Previous" buttons or jump to specific sections with the dot indicators. Additionally, a "Play" and "Pause" feature enables automated slideshow presentation for a hands-free viewing experience. 
            </div>
            <br />
            <Link to="/my-projects/Image-Carousel" className='Project-read-more'>Read more {'>'}</Link>
          </div>
          <div className='Project-Section-Right'><img src={myproject04} alt='Vintage Computer Design' /></div>
        </div>
        <br /><br />
      </div>
    </div>

  )
}

export default MyProjectsPage