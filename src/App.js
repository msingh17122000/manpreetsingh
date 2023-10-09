import {useEffect} from "react"
import {Route,Routes} from "react-router-dom";
import "./style.css";
import { useRef } from 'react';

import Home from "./pages/Home"
import SideNavbar from './components/SideNavbar/SideNavbar';
import MobileNavbar from "./components/MobileNavbar/MobileNavbar";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";




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
    <SideNavbar />
    <Routes>
    <Route path='/'exact Component={Home} />
    <Route path='/about-me'exact Component={AboutMe} />
    <Route path='/contact'exact Component={Contact} />
    </Routes> 
    </div>

  );
}

export default App;
