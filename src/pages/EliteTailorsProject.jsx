import React from 'react';
import ProjectLayout from '../components/ProjectLayout/ProjectLayout';

function EliteTailorsProject() {
  const description = "Worked on the brand’s website and e-commerce experience, focusing on clean design and smooth user experience.";

  const basePath = "/assets/images/projectImages/elite-tailors/";

  const projectMedia = [
    { type: 'image', src: `${basePath}0.png`, caption: "Premium e-commerce flagship store." },
    { type: 'video', src: `${basePath}elite_video.mov`, caption: "E-commerce experience walkthrough." },
    { type: 'image', src: `${basePath}elite_ss1.png`, caption: "Lead development of high-performance frontend architecture." },
    { type: 'image', src: `${basePath}elite_ss2.png`, caption: "Luxury fashion digital identity evolved over 2 years." },
    { type: 'image', src: `${basePath}elite_ss3.png`, caption: "Modern web technologies for premium bespoke tailoring." },
    { type: 'image', src: `${basePath}0.png`, caption: "Seamless UI/UX design focusing on bespoke luxury." }
  ];

  return (
    <ProjectLayout
      title="Elite Tailors"
      subtitle="Punjab-based luxury men’s clothing brand."
      description={description}
      liveLink="https://elitetailors.in/"
      privateRepo="true"
      contribution=" 2 years - Lead Developer & UI/UX Designer."
      media={projectMedia}
    />
  );
}

export default EliteTailorsProject;
