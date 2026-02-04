
import "../style.css";


import AboutSection from '../components/AboutSection/AboutSection';
import MySkills from '../components/MySkills/MySkills';
import MyProjects from "../components/MyProjects/MyProjects";
import IntroSection from "../components/IntroSection/IntroSection";
import MyProjectCards from "../components/MyProjectCards/MyProjectCards";
import WorkExperience from "../components/WorkExperience/WorkExperience";




import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace("#", ""));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, [hash]);
  return (
    <div className="mt-12 py-4 px-4 max-w-[1200px] mx-auto">

      <IntroSection/>
      <WorkExperience/>
      <MyProjectCards/>

   

    </div>
  );
}

export default Home;
