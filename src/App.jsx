import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom";
import "./style.css";

import Home from "./pages/Home"
import Contact from "./pages/Contact";
import PageNotFound404 from "./pages/PageNotFound";
import MyProjectsPage from "./pages/MyProjectsPage";
import MacOSVenturaProject from "./pages/MacOSVenturaProject";
import VintageComputerProject from "./pages/VintageComputerProject";
import MinimalNavbar from "./components/MinimalNavbar/MinimalNavbar";
import ImageCarouselComponent from "./pages/ImageCarouselComponent";
import TailwindTest from "./components/TailwindTest";
// eslint-disable-next-line no-unused-vars
import iOSLayoutProject from "./pages/iOSLayoutProject";

function App() {

  useEffect(() => {
    // Component initialization logic if needed
  }, []);

  return (
    <div>
      <MinimalNavbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/manpreetsingh/' exact element={<Home />} />
        {/* <Route path='/about-me' exact element={<AboutMe />} /> */}
        <Route path='/my-projects' exact element={<MyProjectsPage />} />
        <Route path='/my-projects/macOS-ventura-simulator' exact element={<MacOSVenturaProject />} />
        <Route path='/my-projects/iOS-16.2-Replica' exact element={<iOSLayoutProject />} />
        <Route path='/my-projects/Vintage-Computer-Simulator' exact element={<VintageComputerProject />} />
        <Route path='/my-projects/Image-Carousel' exact element={<ImageCarouselComponent />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path='/tailwind-test' exact element={<TailwindTest />} />
        <Route path="*" element={<PageNotFound404 />} />
      </Routes>
    </div>
  );
}

export default App;
