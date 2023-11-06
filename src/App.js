import {useEffect} from "react"
import {Route,Routes} from "react-router-dom";
import "./style.css";
import { useRef } from 'react';

import Home from "./pages/Home"
import MobileNavbar from "./components/MobileNavbar/MobileNavbar";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import PageNotFound404 from "./pages/PageNotFound";
import MyProjectsPage from "./pages/MyProjectsPage";
import MacOSVenturaProject from "./pages/MacOSVenturaProject";
import VintageComputerProject from "./pages/VintageComputerProject";
import iOSLayoutProject from "./pages/iOSLayoutProject";
import Navbar from "./components/NavigationBar/Navbar";
import ImageCarouselComponent from "./pages/ImageCarouselComponent";



function App() {

  const myElementRef = useRef();

  useEffect(() => {
    // const sidebar=document.getElementById('navbar');
    // sidebar.addEventListener('onmouseover',()=>{
    //     console.log('mouseover');
    // })

  }, []);
    


  return (
   <div>
    <MobileNavbar/>
    <Navbar/>
    <Routes>
    <Route path='/'exact Component={Home} />
    <Route path='/manpreetsingh/'exact Component={Home} />
    <Route path='/about-me'exact Component={AboutMe} />
    <Route path='/my-projects'exact Component={MyProjectsPage} />
    <Route path='/my-projects/macOS-ventura-simulator'exact Component={MacOSVenturaProject} />
    <Route path='/my-projects/iOS-16.2-Replica'exact Component={iOSLayoutProject} />
    <Route path='/my-projects/Vintage-Computer-Simulator'exact Component={VintageComputerProject} />
    <Route path='/my-projects/Image-Carousel'exact Component={ImageCarouselComponent} />
    <Route path='/contact'exact Component={Contact} />
    <Route path="*"Component={PageNotFound404}/>
    </Routes> 
    </div>

  );
}

export default App;
