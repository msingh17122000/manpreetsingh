import React from 'react'

import Image01 from "../assets/images/my-projects/vc04.png"
import Image02 from "../assets/images/my-projects/vc01.png"
import Image04 from "../assets/images/my-projects/vc02.png"
import Image05 from "../assets/images/my-projects/vc03.png"
import Image06 from "../assets/images/my-projects/vc042.png"

function VintageComputerProject() {
  return (

    <div className='project-view-page-container'>
      <div className='Project-Title'>
        Vintage Computer Simulator
      </div>
      <br />
      <div className='med-text'>
        Designed and developed a captivating Vintage Computer Simulator using HTML, CSS, and JavaScript, combining nostalgia with modern web technologies. The project faithfully emulates the aesthetics and functionality of a vintage computer system, offering a unique user experience.
      </div>
      <br />
      <div className='project-links'>
        <a href='https://msingh17122000.github.io/Vintage-Computer/' target="_blank" rel="noreferrer" className='read-more'>Live Project {'>'}</a>
        <a href='https://github.com/msingh17122000/Vintage-Computer' target="_blank" rel="noreferrer" className='read-more'>GitHub Repository {'>'}</a>
      </div>
      <br /><br />
      <div className='med-heading bold'>Project Screenshots</div><br />
      <div className='project-screenshots-gallery'>
        <img src={Image01} alt="screenshot01" />
        <img src={Image02} alt="screenshot02" />
        <img src={Image04} alt="screenshot03" />
        <img src={Image05} alt="screenshot04" />
        <img src={Image06} alt="screenshot05" />
      </div>
      <br />
      <div className='med-heading bold'>Key Features</div><br />
      <div className='med-text'>
        <span className='bold sec-black'>Flickering Screen:</span> Implemented a realistic screen flicker effect to mimic the behavior of vintage CRT monitors, providing an authentic feel of the past.
        <br /><br />
        <span className='bold sec-black'>Old Mouse Cursor:</span> Crafted a vintage-style mouse cursor that complements the overall retro atmosphere of the simulator.
        <br /><br />
        <span className='bold sec-black'>Dynamic Background Color:</span> Enabled users to change the background color, allowing for personalization and interaction with the simulated environment.
        <br /><br />
        <span className='bold sec-black'>Functional Terminal:</span> Created a fully functional vintage terminal within the simulation, complete with a command-line interface reminiscent of classic computer systems.
        <br /><br />
      </div>
      <div className='med-heading bold'>Technologies Used</div><br />
      <div className='med-text'>
        <span className='bold sec-black'>HTML:</span> Structured the project's layout and content.<br /><br />
        <span className='bold sec-black'>CSS:</span> Styled the simulator to replicate the appearance of a vintage computer.<br /><br />
        <span className='bold sec-black'>JavaScript:</span> Implemented interactivity, including screen flickering, mouse cursor, background color change, and terminal functionality.<br /><br />
      </div>
      <br />
      <div className='med-heading bold'>Outcome</div><br />
      <div className='med-text'>
        This project demonstrates my proficiency in front-end web development, attention to detail, and creative problem-solving. It showcases my ability to combine modern web technologies with nostalgic design elements to create a memorable and engaging user experience.

        By developing this Vintage Computer Simulator, I honed my skills in UI/UX design, animation, and JavaScript programming, while also paying homage to the history of computing.

        Feel free to adapt and expand upon this description to best fit your specific achievements and experiences related to this project on your resume.

      </div>
      <br /><br /><br /><br />
    </div>

  )
}

export default VintageComputerProject