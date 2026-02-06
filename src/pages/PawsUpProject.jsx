import React from 'react';
import ProjectLayout from '../components/ProjectLayout/ProjectLayout';
import PawsUpImage from '../assets/images/projectImages/pawsup/0.png';

function PawsUpProject() {
  const description = "A MERN stack pet adoption platform developed during a 6-month industrial training program.";

  const projectMedia = [
    { type: 'image', src: PawsUpImage, caption: "Pet Adoption Platform." },

  ];

  return (
    <ProjectLayout
      title="Paws Up"
      subtitle="Pet Adoption Platform."
      description={description}
      githubLink={"https://github.com/msingh17122000/pawsUp"}
      contribution=" 6 months - Web Developer & UI/UX Designer."
      media={projectMedia}
    />
  );
}

export default PawsUpProject;
