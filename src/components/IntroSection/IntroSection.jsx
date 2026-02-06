import React from 'react'
import { motion } from 'framer-motion'
import portfolioLogo from '../../assets/images/portfolio_logo.png'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { MdArrowOutward } from 'react-icons/md'


function IntroSection() {
    const navigate = useNavigate()
    return (
        <section className=' max-w-[600px] mx-auto text-center min-h-[600px] flex items-center flex-col justify-center gap-8'>
            <motion.img
                initial={{ opacity: 0, y: 20, scale: 0 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                src={portfolioLogo}
                whileTap={{ scale: 0.9 }}
                title='Hi!'
                className='w-40 cursor-pointer h-40 bg-[#F5DEB3] pl-2 object-contain  rounded-full shadow-lg'
                alt="Portfolio Logo"
            />
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.4, ease: "easeOut" }}
                className='mt-2 text-2xl text-balance text-[#686868]'
            >
                I’m a <b className='text-black font-[500]'> web developer</b> focused on creating clean, intuitive, and brand-driven digital experiences. I enjoy working on products from idea to launch.
            </motion.p>

            {/* CTA Section */}
            <section className='mt-4 flex gap-4'>
                <motion.button initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={() => {
                        window.open(
                            'https://drive.google.com/file/d/1i1UJqFGwhKaq5K40MAn02vMYBSCBFJjT/view?usp=drive_link',
                            '_blank'
                        );
                    }}
                    transition={{ duration: 0.2, delay: 0.6, ease: "easeOut" }} className='text-sm text-[#06c] flex gap-2 font-[400] items-center hover:bg-[#f5f5f7] px-4 py-3 rounded-full '>
                    View Resume
                    <MdArrowOutward />
                </motion.button>
                <motion.button initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={() => { navigate('/contact') }}
                    transition={{ duration: 0.2, delay: 0.6, ease: "easeOut" }} className='text-sm text-[#06c] flex gap-2 font-[400] items-center hover:bg-[#f5f5f7] px-4 py-3 rounded-full '>
                    Let's Connect
                    <IoIosArrowRoundForward size={20} />
                </motion.button>

            </section>

        </section>
    )
}

export default IntroSection
