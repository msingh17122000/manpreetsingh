import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MdArrowOutward } from 'react-icons/md';


const MinimalNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const [scrolled, setScrolled] = useState(false);

    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            // setScrolled(window.scrollY > 20);

            // Active section tracking for Home page
            if (location.pathname === '/' || location.pathname === '/manpreetsingh/') {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                    const rect = projectsSection.getBoundingClientRect();
                    // If the project section is in view (near top)
                    if (rect.top <= 150) {
                        setActiveSection('projects');
                    } else {
                        setActiveSection('home');
                    }
                } else {
                    setActiveSection('home');
                }
            } else {
                setActiveSection('');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/my-projects' },
        { name: 'Resume', icon: <MdArrowOutward size={16} />, path: 'https://drive.google.com/file/d/1i1UJqFGwhKaq5K40MAn02vMYBSCBFJjT/view?usp=drive_link', external: true },
        { name: 'Contact', path: '/contact' },
    ];

    const scrollToSection = (id) => {
        setIsOpen(false);
        if (id === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            // If on another page, navigate to home first
            window.location.href = `/#${id}`;
        }
    };

    const menuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                when: "afterChildren",
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            opacity: 1,
            height: "100vh",
            transition: {
                duration: 0.4,
                ease: "easeInOut",
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const linkVariants = {
        closed: { opacity: 0, x: -20 },
        open: { opacity: 1, x: 0 }
    };

    return (
        <nav
            className="fixed top-0 w-full z-[1000] bg-white/80 backdrop-blur-lg border-b border-black/5"
        >
            <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2 z-[1001]" onClick={() => setIsOpen(false)}>
                    {/* <img src={NavbarLogo} alt="Logo" className="w-8 h-8" /> */}
                    <span className="font-semibold text-lg tracking-tight">dev.manpreet</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        link.external ? (
                            <a
                                key={link.name}
                                href={link.path}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm flex items-center gap-1 font-[400] text-gray-600 hover:text-black transition-colors"
                            >
                                {link.name}
                                {link.icon && <span >{link.icon}</span>}

                            </a>
                        ) : link.scroll ? (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.path)}
                                className={`text-sm font-[400] transition-colors pb-1 border-b-2 ${activeSection === 'home' && link.name === 'Home'
                                    ? 'text-black border-black'
                                    : 'text-gray-600 hover:text-black border-transparent'
                                    }`}
                            >
                                {link.name}
                                {link.icon && <span >{link.icon} hi</span>}
                            </button>
                        ) : (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-[400] transition-colors ${isActive
                                        ? ' border-black underline  underline-offset-[6px] text-[#06c]'
                                        : 'text-gray-600 hover:text-black border-transparent'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        )
                    ))}
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center space-x-4 z-[1001]">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-black rounded-full block origin-center"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-black rounded-full block origin-center"
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="md:hidden fixed inset-0 w-full bg-white z-[1000] flex flex-col pt-24 px-10"
                    >
                        <div className="flex flex-col space-y-6">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    variants={linkVariants}
                                    className=""
                                >
                                    {link.external ? (
                                        <a
                                            href={link.path}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-2xl flex items-center gap-1 font-semibold text-gray-900 tracking-tight"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name} <MdArrowOutward />
                                        </a>
                                    ) : link.scroll ? (
                                        <button
                                            onClick={() => scrollToSection(link.path)}
                                            className={`text-2xl font-semibold tracking-tight text-left w-full ${activeSection === 'home' && link.name === 'Home'
                                                ? 'text-blue-600'
                                                : 'text-gray-900'
                                                }`}
                                        >
                                            {link.name}
                                        </button>
                                    ) : (
                                        <NavLink
                                            to={link.path}
                                            className={({ isActive }) =>
                                                `text-2xl font-semibold tracking-tight ${isActive ? 'text-blue-600' : 'text-gray-900'
                                                }`
                                            }
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </NavLink>
                                    )
                                    }
                                </motion.div>
                            ))}
                        </div>

                        {/* <div className="mt-auto mb-10">
                            <p className="text-zinc-500 text-sm">© 2026 Manpreet Singh. All rights reserved.</p>
                        </div> */}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default MinimalNavbar;
