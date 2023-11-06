import React from 'react'
import "./ImageSliders.css"
import screenShot01 from "../assets/images/my-projects/mc01.png"
import screenShot02 from "../assets/images/my-projects/mc02.png"
import screenShot03 from "../assets/images/my-projects/mc05.png"
import screenShot05 from "../assets/images/my-projects/mc04.png"
import ImageCarousel01 from "../assets/images/my-projects/image-carousel01.png"
import ImageCarousel02 from "../assets/images/my-projects/image-carousel02.png"

function ImageCarouselComponent() {
    return (
        <div className='project-view-page-container'>
            <div className='Project-Title'>
                Smooth Image Carousel
            </div>
            <br />
            <div className='med-text'>
                Designed and implemented an interactive image carousel using HTML, CSS, and JavaScript to elevate the visual appeal. Users can seamlessly navigate through the carousel using "Next" and "Previous" buttons or jump to specific sections with the dot indicators. Additionally, a "Play" and "Pause" feature enables automated slideshow presentation for a hands-free viewing experience.
            </div>
            <br />
            <div className='project-links'>
                <a href='https://msingh17122000.github.io/Smooth-Image-Carousal/' target="_blank" className='read-more'>Live Project {'>'}</a>
                <a href='https://github.com/msingh17122000/Smooth-Image-Carousal' target="_blank" className='read-more'>GitHub Repository {'>'}</a>
            </div>
            <br /><br />
            <div className='med-heading sanf-bold'>Highlights</div>
            <div className='hint-text'>Scroll to right -{">"}</div>
            <div className='SlidesContainer'>
                <div className='ImageSliderContainer05 slides'>
                    <div className='SliderImageContainer05'>
                        <img className="SliderImage05" src={ImageCarousel01} alt="Project Screenshot 05" />
                    </div>
                    <div className='ImageTextContainer05'>
                        <div className='SliderHeading05'>Smooth Image Carousel</div>
                        <div className='SliderText05'>Seamlessly navigate through the images.</div>
                    </div>
                </div>
                <div className='ImageSliderContainer06 slides'>
                    <div className='ImageTextContainer06'>
                        <div className='SliderHeading'>Meticulously designed UI</div>
                        <div className='SliderText'>Minimalist appearance designed to strike a balance
                            between form and function.</div>
                    </div>
                    <div className='SliderImageContainer'>
                        <img className="SliderImage06" src={ImageCarousel02} alt="Project Screenshot" />
                    </div>
                </div>
            </div>
            <div className="MyCarouselController" id="MyCarouselController">
                <div className="MyCarouselControllerContainer" id="MyCarouselControllerContainer"></div>
            </div>
            <br />
            <br />
            <div className='med-heading sanf-bold'>Features</div><br />
            <div className='med-text'>
                <span className='bold sec-black'>Intuitive Navigation:</span> The carousel includes "Next" and "Previous" buttons, making it effortless for users to browse through images at their own pace.
                <br /><br />
                <span className='bold sec-black'>Dot Indicators:</span> A set of dot indicators allows users to quickly jump to specific slides, enhancing navigation convenience.
                <br /><br />
                <span className='bold sec-black'>Customizability:</span>  It is easily adaptable to showcase different sets of images, making it versatile for a range of applications, from portfolios to product displays.
                <br /><br />
                <span className='bold sec-black'>Interactive Engagement:</span> By combining various features, the carousel offers an interactive and engaging platform for presenting images and content, leaving a lasting impression on the audience.
                <br /><br />
            </div>
            <br /><br /><br /><br />
        </div>
    )
}

export default ImageCarouselComponent