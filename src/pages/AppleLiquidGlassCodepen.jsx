import React, { useEffect } from 'react'
import ProjectLayout from '../components/ProjectLayout/ProjectLayout'
import codepenThumb from '../assets/images/codepen/0.png';
import './AppleLiquidGlassCodepen.css'


function AppleLiquidGlassCodepen() {
    const description = "Built an Apple Liquid Glass effect using pure HTML and CSS with SVG filters for the distortion effect.";

    const projectMedia = [
        { type: 'image', src: codepenThumb, caption: "" },

    ];

    useEffect(() => {
        const el = document.getElementById("draggable");
        let isDragging = false;
        let offsetX = 0;
        let offsetY = 0;

        el.addEventListener("mousedown", (e) => {
            isDragging = true;
            offsetX = e.clientX - el.offsetLeft;
            offsetY = e.clientY - el.offsetTop;
        });

        document.addEventListener("mousemove", (e) => {
            if (!isDragging) return;
            el.style.left = `${e.clientX - offsetX}px`;
            el.style.top = `${e.clientY - offsetY}px`;
        });

        document.addEventListener("mouseup", () => {
            isDragging = false;
        });

        return () => {
            document.removeEventListener("mousemove", () => { });
            document.removeEventListener("mouseup", () => { });
        };
    }, []);
    return (
        <div className='max-w-[1200px] mx-auto'>
            <ProjectLayout
            containerClass={"!h-fit !min-h-0 !pb-0"}
                title="Apple Liquid Glass using pure HTML, CSS."
                subtitle="Codepen."
                description={description}
                liveLink="https://codepen.io/msingh_2000/full/yyYbOXE"
                githubLink={"https://github.com/msingh17122000/Apple-Liquid-Glass-Using-HTML-CSS"}
            />
            <section className="max-sm:rounded-none shadow-lg mb-20 py-4 rounded-[1rem] max-w-[1200px] mx-auto px-4 codepen-section h-[500px] w-full relative">
                <div
                    className="liquid-glass-wrapper text-center absolute cursor-move"
                    id="draggable"
                >
                    <div>Drag Me 👋</div>

                    <svg>
                        <filter id="liquidGlass">
                            <feTurbulence
                                type="fractalNoise"
                                baseFrequency="0.008 0.008"
                                numOctaves="4"
                                seed="92"
                                result="noise"
                            />
                            <feDisplacementMap
                                in="SourceGraphic"
                                scale="50"
                                xChannelSelector="B"
                                yChannelSelector="G"
                            />
                        </filter>
                    </svg>
                </div>
            </section>

        </div>
    )
}

export default AppleLiquidGlassCodepen
