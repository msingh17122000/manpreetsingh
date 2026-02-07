import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import macosThumb from '../../assets/images/my-projects/mc01.png';
import iosThumb from '../../assets/images/my-projects/myproject03.png';
import eliteTailorsThumb from '../../assets/images/projectImages/elite-tailors/elitetailors_thubmnail.png';
import pawsupThumb from '../../assets/images/projectImages/pawsUp_thumbnail.png';
import computerGarageThumb from '../../assets/images/projectImages/Image Not Available.jpg';
import vintageThumb from '../../assets/images/my-projects/myproject02.png';
import { IoIosArrowForward } from 'react-icons/io';

const projects = [
    {
        id: 'elite-tailors',
        category: 'Brand Website',
        title: 'Elite Tailors',
        date: 'Oct 2023 - Dec 2025',
        description: "Elite Tailors is a Punjab based, Indian clothing brand offering luxury handmade men's apparel with minimalist design, premium fabrics, and timeless design.",
        image: eliteTailorsThumb,
        link: '/my-projects/elite-tailors',
        tags: ['React', 'Express Js', 'MongoDB', 'Node Js', 'CSS', 'Framer Motion', 'Tailwind CSS'],
        bg: 'bg-white'
    },
    {
        id: 'pawsup',
        category: 'Web Application',
        title: 'PawsUp ',
        date: 'Nov 2024 - Mar 2025',
        description: 'A full-stack pet adoption platform enabling users to browse pets, submit adoption requests, and manage listings through an admin dashboard.',
        image: pawsupThumb,
        link: '/my-projects/pawsup',
        tags: ['React', 'Express Js', 'MongoDB', 'Node Js', 'CSS',],
        color: 'text-white',
        bg: 'bg-black'
    },
    {
        id: 'computer-garage',
        category: 'E-Commerce',
        title: 'Computer Garage',
        date: 'June 2023 - Aug 2023',
        description: "A comprehensive e-commerce platform that offers a wide range of computer-related products and accessories. This project allowed me to demonstrate my expertise in web development and database management, incorporating HTML, CSS, JavaScript, PHP, and MySQL to create a fully functional and user-friendly website for online shopping.",
        image: computerGarageThumb,
        // link: '/my-projects/elite-tailors',
        tags: ['php', 'mysql', 'html', 'css', 'js'],
        bg: 'bg-white'
    },
    {
        id: 'macos',
        category: 'Simulator',
        title: 'macOS Ventura UI',
        date: 'Jan 2023 - June 2023',
        description: 'An immersive web experience emulating macOS Ventura with advanced JS.',
        image: macosThumb,
        link: '/my-projects/macOS-ventura-simulator',
        tags: ['Javascript', 'HTML', 'CSS'],
        bg: 'bg-white'
    },
    {
        id: 'ios',
        category: 'Design',
        title: 'iOS 16.2 Replica',
        date: 'Dec 2022',
        description: 'A pixel-perfect replica of the iOS home screen layout and animations.',
        image: iosThumb,
        // link: '/my-projects/iOS-16.2-Replica',
        tags: ['CSS', 'HTML', 'UI Design'],
        bg: 'bg-white'
    },
    {
        id: 'vintage',
        category: 'Nostalgia',
        title: 'Vintage Computer Sim',
        date: 'Sept 2022 - Nov 2022',
        description: 'Emulating the aesthetics and functionality of early computing systems.',
        image: vintageThumb,
        link: '/my-projects/Vintage-Computer-Simulator',
        tags: ['JS', 'Retro UI', 'CSS'],
        bg: 'bg-white'
    }
];

const MyProjectCards = () => {
    return (
        <section id="projects" className="py-20 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-3xl font-[500] mb-12 tracking-tight px-4 md:px-0"
            >
                Get to know my work.
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="rounded-[1rem] bg-[#f5f5f7] overflow-hidden  transition-all duration-300 group cursor-pointer"
                    >
                        <Link to={project.link}>
                            <div className="h-[240px] overflow-hidden bg-zinc-100 relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white text-[10px] font-medium px-3 py-1 rounded-full">
                                    {project.category}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col h-[280px]">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-semibold leading-tight">
                                        {project.title}
                                    </h3>
                                    <IoIosArrowForward className="text-zinc-400 group-hover:text-blue-500 transition-colors" size={20} />
                                </div>
                                <span className="text-xs text-zinc-500 mb-4">
                                    {project.date}
                                </span>
                                <p className="text-sm text-zinc-600 mb-6 line-clamp-3 leading-relaxed font-light">
                                    {project.description}
                                </p>

                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] bg-white text-zinc-600 px-2 py-1 rounded-md font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            <style jsx="true">{`
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </section>
    );
};

export default MyProjectCards;
