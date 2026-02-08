import React from 'react'
import { motion } from 'framer-motion'
import MyProjectCards from '../MyProjectCards/MyProjectCards'
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import codepenThumb from '../../assets/images/codepen/0.png';

function CodepenSection() {

    const projects = [
        {
            id: 'codepen-apple-liquid-glass',
            category: 'Codepen',
            title: 'Apple Liquid Glass using pure HTML, CSS.',
            date: 'August 4, 2025',
            description: "Built an Apple Liquid Glass effect using pure HTML and CSS with SVG filters for the distortion effect.",
            image: codepenThumb,
            link: '/codepen/apple-liquid-glass',
            tags: ['HTML', 'CSS'],
            bg: 'bg-white'
        },
        
    ];
    
    return (
        <section className='max-w-[1200px]  mx-auto'>
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-3xl font-[500] mb-12 tracking-tight px-4 md:px-0"
            >
                Codepens
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
    )
}

export default CodepenSection
