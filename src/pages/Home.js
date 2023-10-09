
import "../style.css";


import AboutSection from '../components/AboutSection/AboutSection';
import MySkills from '../components/MySkills/MySkills';
import MyProjects from "../components/MyProjects/MyProjects";





window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;

  // Define your scroll threshold here
  var scrollThreshold = 600; // For example, change background color after scrolling 100 pixels
  const currentUrl = window.location.pathname;
  if(currentUrl==="/"){
  if (scrollPosition > scrollThreshold) {
    document.getElementById('main').style.backgroundColor = 'black';
    document.getElementById('skills-heading').style.color = 'white';
    document.getElementById('about-text').style.color = 'white';
    document.getElementById('about-me-heading').style.color = 'white';
     } 
  else {
    
    document.getElementById('main').style.backgroundColor = '#eff1f4';
    document.getElementById('skills-heading').style.color = 'var(--secondary-black)';
    document.getElementById('about-text').style.color = 'var(--light-black)';
    document.getElementById('about-me-heading').style.color = 'var(--secondary-black)';
    setTimeout(()=>{
    }, 800);
    }
}
});

function Home() {
  return (
    <div className='main'id='main'>
      <div className="gradient-container">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      
    <div className='main-content'>
      <AboutSection/>
      <br/><br/>
      <MySkills/>
      <br/><br/>
    
      <MyProjects/>
    </div>

    </div>

  );
}

export default Home;
