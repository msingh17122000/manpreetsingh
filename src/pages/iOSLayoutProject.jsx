import React from 'react';
import ProjectLayout from '../components/ProjectLayout/ProjectLayout';
import Image01 from "../assets/images/my-projects/myproject03.png";
import Image02 from "../assets/images/my-projects/Screenshot (106).png";

function iOSLayoutProject() {
  const description = "Designed and implemented an accurate replica of the iOS 16 home screen layout using HTML and CSS. This project aimed to showcase my proficiency in web design by replicating the visual aesthetics and layout of a popular mobile operating system.";

  const projectMedia = [
    { type: 'image', src: Image01, caption: "Meticulously recreated iOS 16 icons and home screen grid." },
    { type: 'image', src: Image02, caption: "Fluid and adaptable layout using modern CSS Grid and Flexbox." },
    { type: 'image', src: Image01, caption: "Custom iconography mimicking the iOS style." }
  ];

  return (
    <ProjectLayout
      title="iOS 16 Layout"
      subtitle="Mobile UI Replica."
      description={description}
      liveLink="https://msingh17122000.github.io/iOS-16.2-Simulator/"
      githubLink="https://github.com/msingh17122000/iOS-16.2-Simulator"
      media={projectMedia}
    />
  );
}

export default iOSLayoutProject;