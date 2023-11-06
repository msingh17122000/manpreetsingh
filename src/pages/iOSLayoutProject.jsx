import React from 'react'

import Image01 from "../assets/images/my-projects/myproject03.png"
import Image02 from "../assets/images/my-projects/Screenshot (106).png"

function iOSLayoutProject() {
  return (
    <div className='project-view-page-container'>
    <div className='Project-Title'>
    iOS 16 Layout Replica
    </div>
    <br />
    <div className='med-text'>
    Designed and implemented an accurate replica of the iOS 16 home screen layout using HTML and CSS. This project aimed to showcase my proficiency in web design by replicating the visual aesthetics and layout of a popular mobile operating system.
    </div>
    <br />
    <div className='project-links'>
      <a href='https://msingh17122000.github.io/iOS-16.2-Simulator/' target="_blank"className='read-more'>Live Project {'>'}</a>
      <a href='https://github.com/msingh17122000/iOS-16.2-Simulator' target="_blank"className='read-more'>GitHub Repository {'>'}</a>
    </div>
    <br /><br />
    <div className='med-heading bold'>Project Screenshots</div><br />
    <div className='project-screenshots-gallery'>
    <img src={Image01} alt="screenshot01"/>
    <img src={Image02} alt="screenshot02"/>
    </div>
    <br/>
    <div className='med-heading bold'>Key Features</div><br />
    <div className='med-text'>
      <span className='bold sec-black'>Pixel-Perfect Replication:</span> Meticulously recreated the icons, grid layout, and overall visual design of the iOS 16 home screen to achieve a high level of accuracy.
      <br /><br />
      <span className='bold sec-black'>Responsive Design:</span> Ensured that the layout was responsive, adapting seamlessly to different screen sizes and orientations, emulating the mobile experience.
      <br /><br />
      <span className='bold sec-black'>Iconography:</span>  Designed and implemented custom icons to mimic the style and appearance of iOS 16 app icons.
      <br /><br />
      <span className='bold sec-black'>CSS Flexbox and Grid:</span> Leveraged CSS Flexbox and Grid to create a fluid and adaptable layout, mirroring the grid-based organization of app icons on the iOS home screen.
      <br /><br />
    </div>
    <div className='med-heading bold'>Technologies Used</div><br />
    <div className='med-text'>
    <span className='bold sec-black'>HTML:</span>  Structured the project's layout and content, including the arrangement of app icons and widgets.<br/><br/>
    <span className='bold sec-black'>CSS:</span> Styled the layout to replicate the look and feel of the iOS 16 home screen, including the use of custom icons and responsive design.<br/><br/>
    </div>
    <br/>
    <div className='med-heading bold'>Outcome</div><br />
    <div className='med-text'>
    This project demonstrates my strong web design skills, attention to detail, and ability to recreate complex user interfaces accurately. By replicating the iOS 16 home screen layout, I gained experience in responsive design and CSS layout techniques, highlighting my commitment to creating visually appealing and user-friendly interfaces.

While this project does not include functionality, it showcases my proficiency in front-end web development and design, making it a valuable addition to my portfolio.
   </div>
    <br /><br /><br /><br />
  </div>
  )
}

export default iOSLayoutProject