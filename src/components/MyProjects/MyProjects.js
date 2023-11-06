import React from 'react'
import { Link } from 'react-router-dom'
import "./MyProjects.css"
import myproject01thumb from "../../assets/images/my-projects/mc01.png"
import myproject02 from "../../assets/images/my-projects/myproject02.png"
import myproject03 from "../../assets/images/my-projects/myproject03.png"
import AboutPortfolio from '../AboutPortfolio/AboutPortfolio'
function MyProjects() {
  return (
    
      <div className='MyProjects-Container'>
        <div className='my-projects-heading'>My Projects</div>
        <div className='Project-Section-Container'>
          <div className='Project-Section' id="Project-Section-01">
            <div className='Project-Section-Left'>
              <div className='Project-Title black-text'>macOS Ventura UI</div>
              <br/>
              <div className='Project-Description black-text'>
              The macOS Ventura UI is a web app that emulates macOS Ventura's UI and features with HTML, CSS, and JavaScript. It's a project dedicated to recreating the Ventura experience in a web browser, showcasing front-end web development expertise.
              </div>
              <br />
              <Link to="/my-projects/macOS-ventura-simulator" className='Project-read-more'>Read more {'>'}</Link>
            </div>
            <div className='Project-Section-Right'><img src={myproject01thumb} alt='macOs Ventura Project Screenshot' /></div>
          </div>
          <div className='Project-Section' id="Project-Section-02">
            <div className='Project-Section-Left'>
            <div className='Project-Title white'>iOS 16.2 Home Screen Replica</div>
            <br/>
              <div className='Project-Description white'>Designed and implemented an accurate replica of the iOS 16 home screen layout using HTML and CSS. This project aimed to showcase my proficiency in web design by replicating the visual aesthetics and layout of a popular mobile operating system.</div>
              <br />
              <Link to="/my-projects/iOS-16.2-Replica" className='Project-read-more'>Read more {'>'}</Link>
            </div>
            <div className='Project-Section-Right'><img src={myproject03} alt='iOS 16.2 Screen Layout' /></div>
          </div>
          <div className='Project-Section' id="Project-Section-03">
            <div className='Project-Section-Left'>
            <div className='Project-Title black-text'>Vintage Computer Simulator</div>
            <br/>
              <div className='Project-Description black-text'> Designed and developed a captivating Vintage Computer Simulator using HTML, CSS, and JavaScript, combining nostalgia with modern web technologies. The project faithfully emulates the aesthetics and functionality of a vintage computer system, offering a unique user experience.</div>
              <br />
              <Link to="/my-projects/Vintage-Computer-Simulator" className='Project-read-more'>Read more {'>'}</Link>
            </div>
            <div className='Project-Section-Right'><img src={myproject02} alt='Vintage Computer Design' /></div>
          </div>
        </div>
        <AboutPortfolio/>
            <div className='center'>
              <Link to='/my-projects'className='Projects-page-link'>
                <div >
                  View All Projects
                </div>
              </Link>
            </div>
        <br /><br />
      </div>

  )
}

export default MyProjects