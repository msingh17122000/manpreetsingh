import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './ProjectDesign.css';
import { MdArrowOutward } from 'react-icons/md';
import { IoIosLock } from 'react-icons/io';

const ProjectLayout = ({
    title,
    subtitle,
    description,
    liveLink,
    githubLink,
    privateRepo,
    contribution,
    media = [], // Array of { type: 'image'|'video', src: string, caption?: string }
    children // Support for Bento Grid fallback or additional content
}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
    };

    // useEffect(() => {
    //     if (media.length <= 1) return;
    //     const interval = setInterval(nextSlide, 5000);
    //     return () => clearInterval(interval);
    // }, [media.length, activeIndex]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <div className="apple-project-container">
            <motion.header
                className="apple-hero"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.h1 className="apple-hero-title" variants={itemVariants}>
                    {title}
                </motion.h1>
                <motion.h2 className="apple-hero-subtitle" variants={itemVariants}>
                    {subtitle}
                </motion.h2>
                <motion.p className="apple-body-text" variants={itemVariants}>
                    {description}
                </motion.p>

                <motion.p className="text-sm text-[#686868] font-[500] mt-4" variants={itemVariants}>
                    {contribution}
                </motion.p>

                <motion.div className="apple-hero-links flex gap-4" style={{ marginTop: '32px' }} variants={itemVariants}>
                    {liveLink && (
                        <a href={liveLink} target="_blank" rel="noreferrer" className="gap-2 bg-[#f5f5f7] w-fit  hover:bg-[#efefef] text-[#0071e3] hover:text-[#06c] px-4 py-2 rounded-full text-sm flex items-center">
                            Visit <MdArrowOutward />
                        </a>
                    )}
                    {githubLink && (
                        <a href={githubLink} target="_blank" rel="noreferrer" className="gap-2 bg-[#f5f5f7] w-fit  hover:bg-[#efefef] text-[#0071e3] hover:text-[#06c] px-4 py-2 rounded-full text-sm flex items-center">
                            GitHub <MdArrowOutward />
                        </a>
                    )}
                    {
                        privateRepo &&
                        <button disabled title='Private Repository' href={privateRepo} target="_blank" rel="noreferrer" className="gap-2 bg-[#f5f5f7] w-fit text-[#0071e3] disabled:opacity-60 disabled:select-none disabled:cursor-not-allowed hover:text-[#06c] px-4 py-2 rounded-full text-sm flex items-center">
                            <IoIosLock /> Github
                        </button>
                    }
                </motion.div>
            </motion.header>

            {/* Render Media Slider if media prop exists */}
            {media.length > 0 && (
                <div className="media-slider-container shadow-lg">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            className="media-slide"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            {media[activeIndex].type === 'video' ? (
                                <video
                                    src={media[activeIndex].src}
                                    className="media-content"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                            ) : (
                                <img
                                    src={media[activeIndex].src}
                                    alt={media[activeIndex].caption || "Project Visual"}
                                    className="media-content"
                                />
                            )}
                            {/* {media[activeIndex].caption && (
                                <div className="slider-caption">{media[activeIndex].caption}</div>
                            )} */}
                        </motion.div>
                    </AnimatePresence>

                    {media.length > 1 && (
                        <>
                            <button className="slider-nav-button prev" onClick={prevSlide}>
                                <FiChevronLeft />
                            </button>
                            <button className="slider-nav-button next" onClick={nextSlide}>
                                <FiChevronRight />
                            </button>

                            <div className="slider-indicators">
                                {media.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`indicator-dot ${index === activeIndex ? 'active' : ''}`}
                                        onClick={() => setActiveIndex(index)}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            )}

            {/* Thumbnails Navigation */}
            {media.length > 1 && (
                <div className="thumbnail-list">
                    {media.map((item, index) => (
                        <div
                            key={index}
                            className={`thumbnail-item ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            {item.type === 'video' ? (
                                <video src={item.src} className="thumbnail-video-preview" muted />
                            ) : (
                                <img src={item.src} alt={`Thumbnail ${index + 1}`} className="thumbnail-image" />
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Render Children (Bento Grid) if present */}
            {children && (
                <main className="apple-bento-grid">
                    {children}
                </main>
            )}
        </div>
    );
};

export const BentoCard = ({ children, span = "span-6", glow = "glow-white", className = "" }) => {
    return (
        <motion.div
            className={`apple-card ${span} ${glow} ${className}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
};

export default ProjectLayout;
