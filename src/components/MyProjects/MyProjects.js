import React from 'react'

import "./MyProjects.css"
import myproject01thumb from "../../assets/images/my-projects/myproject01thumbnail.png"
import myproject02 from "../../assets/images/my-projects/myproject02.png"
import myproject03 from "../../assets/images/my-projects/myproject03.png"
function MyProjects() {
  return (
    <div className='main-container project'id="projects">
        <div className='MyProjects-Container'>
          <div className='my-projects-heading'>My Projects</div>
            
            <div className='my-projects-box-container'>
              <div className='my-project-box'>
                <div className='my-project-image'><img src={myproject01thumb} alt='MacOS-Ventura-Project-Screenshot'/></div>
                <div className='my-project-name'>MacOS Ventura Simulator</div>
              </div>
              <div className='my-project-box'>
              <div className='my-project-image'><img src={myproject02} alt='MacOS-Ventura-Project-Screenshot'/></div>
                <div className='my-project-name'>Vintage Computer</div>
              </div>
              <div className='my-project-box'>
              <div className='my-project-image'><img src={myproject03} alt='MacOS-Ventura-Project-Screenshot'/></div>
                <div className='my-project-name'>MacOS Ventura Simulator</div>
              </div>
             
            </div>
        </div>
    </div>
  )
}

export default MyProjects