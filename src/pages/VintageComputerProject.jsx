import React from 'react';
import ProjectLayout from '../components/ProjectLayout/ProjectLayout';
import Image01 from "../assets/images/my-projects/vc04.png";
import Image02 from "../assets/images/my-projects/vc01.png";
import Image04 from "../assets/images/my-projects/vc02.png";
import Image05 from "../assets/images/my-projects/vc03.png";
import Image06 from "../assets/images/my-projects/vc042.png";

function VintageComputerProject() {
  const description = "Designed and developed a captivating Vintage Computer Simulator using HTML, CSS, and JavaScript, combining nostalgia with modern web technologies. The project faithfully emulates the aesthetics and functionality of a vintage computer system, offering a unique user experience.";

  const projectMedia = [
    { type: 'image', src: Image01, caption: "Authentic CRT display with scanlines and flicker effects." },
    { type: 'image', src: Image02, caption: "Functional retro terminal with a command-line interface." },
    { type: 'image', src: Image04, caption: "Nostalgic UI elements and custom vintage mouse cursors." },
    { type: 'image', src: Image05, caption: "Interactive simulated environment with dynamic effects." },
    { type: 'image', src: Image06, caption: "Faithful emulation of classic computing history." }
  ];

  return (
    <ProjectLayout
      title="Vintage Computer"
      subtitle="CRT Emulator."
      description={description}
      liveLink="https://msingh17122000.github.io/Vintage-Computer/"
      githubLink="https://github.com/msingh17122000/Vintage-Computer"
      media={projectMedia}
    />
  );
}

export default VintageComputerProject;