import React from 'react';
import ProjectLayout from '../components/ProjectLayout/ProjectLayout';
import screenShot01 from "../assets/images/my-projects/mc01.png";
import screenShot02 from "../assets/images/my-projects/mc02.png";
import screenShot03 from "../assets/images/my-projects/mc05.png";
import screenShot05 from "../assets/images/my-projects/mc04.png";

function MacOSVenturaProject() {
  const description = "Designed and developed a web-based macOS UI using HTML, CSS, and JavaScript, with a focus on replicating the visual aesthetics and functionality of the macOS operating system. This project is an immersive experience that brings the look and feel of macOS to the web.";

  const projectMedia = [
    { type: 'image', src: screenShot01, caption: "Pixel-perfect replica of the macOS interface." },
    { type: 'image', src: screenShot02, caption: "Dynamic wallpapers that change seamlessly." },
    { type: 'image', src: screenShot05, caption: "Boot screen and startup experience." },
    { type: 'image', src: screenShot03, caption: "Universal experience on any laptop or desktop device." }
  ];

  return (
    <ProjectLayout
      title="macOS Ventura"
      subtitle="Web-based UI Simulator."
      description={description}
      liveLink="https://msingh17122000.github.io/macOS-Ventura-Simulator/"
      githubLink="https://github.com/msingh17122000/macOS-Ventura-Simulator"
      media={projectMedia}
    />
  );
}

export default MacOSVenturaProject;