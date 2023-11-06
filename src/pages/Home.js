
import "../style.css";


import AboutSection from '../components/AboutSection/AboutSection';
import MySkills from '../components/MySkills/MySkills';
import MyProjects from "../components/MyProjects/MyProjects";




function Home() {
   
    
  return (
    <div>
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
      
    
      
    </div>

    </div>
      <MyProjects/>
   

    </div>
  );
}

export default Home;
