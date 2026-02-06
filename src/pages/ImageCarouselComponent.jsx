import React from 'react';
import ProjectLayout from '../components/ProjectLayout/ProjectLayout';
import ImageCarousel01 from "../assets/images/my-projects/image-carousel01.png";
import ImageCarousel02 from "../assets/images/my-projects/image-carousel02.png";

function ImageCarouselComponent() {
    const description = "Designed and implemented an interactive image carousel using HTML, CSS, and JavaScript to elevate the visual appeal. Users can seamlessly navigate through the carousel using buttons or dot indicators, with automated slideshow capabilities.";

    const projectMedia = [
        { type: 'image', src: ImageCarousel01, caption: "Minimalist appearance designed to strike a balance between form and function." },
        { type: 'image', src: ImageCarousel02, caption: "Smooth transitions and intuitive controls for an interactive experience." }
    ];

    return (
        <ProjectLayout
            title="Image Carousel"
            subtitle="Smooth Interaction."
            description={description}
            liveLink="https://msingh17122000.github.io/Smooth-Image-Carousal/"
            githubLink="https://github.com/msingh17122000/Smooth-Image-Carousal"
            media={projectMedia}
        />
    );
}

export default ImageCarouselComponent;