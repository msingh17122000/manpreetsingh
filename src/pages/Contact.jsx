import React from 'react'
import { motion } from 'framer-motion'
import "./Pages.css"
import SocialLinks from '../components/SocialLinks/SocialLinks'

function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className='px-4 py-2 max-w-[1200px] mx-auto'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className='aboutme-page-container flex-row '>
        <br /><br /><br /><br />

        <div className='main-container'>
          <motion.h1
            variants={itemVariants}
            className='text-5xl font-[500] mb-8'
          >
            Contact me
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className='med-text' id='contact-me-text'
          >
            Feel free to reach out and get in touch with me. I'm always eager to connect, whether it's for potential collaborations, inquiries about my work, or just a friendly chat. Your feedback and questions are valuable, and I look forward to hearing from you soon!
          </motion.div>

          <br />

          <motion.a
            variants={itemVariants}
            href="mailto: manpreetsingh10720@gmail.com"
            className='bg-[#f5f5f7] text-[#06c] text-sm hover:bg-[#efefef] flex gap-2 items-center w-fit font-[400] px-4 py-3 rounded-full transition-colors'

          >
            Send Email
          </motion.a>
        </div>
      </div>

      <motion.div
        variants={itemVariants}
        className='mt-6'
      >
        <SocialLinks />
      </motion.div>

      <br /><br /><br /><br />
    </motion.div>
  )
}

export default Contact