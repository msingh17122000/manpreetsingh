import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function WorkExperience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className='text-3xl font-[500] mb-8'>Work Experience</h2>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Link to={"/my-projects/elite-tailors"} className='border-b border-t max-sm:flex-wrap py-6 px-4 flex gap-2 hover:bg-zinc-50 transition-colors'>
          <div className='max-w-[100px] w-full font-[500] text-[#686868] mt-1 text-sm'>
            2023 - 2025
          </div>
          <div className='justify-between w-full gap-2 flex max-sm:flex-wrap'>
            <div className='flex gap-1 flex-col'>
              <div className='text-lg font-[500]'>Elite Tailors</div>
              <div className='text-gray-700 text-sm'>Designed and developed a full-stack clothing brand platform</div>
            </div>
            <div className='text-black max-sm:mt-2 text-sm'>Lead Web Developer & Designer</div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default WorkExperience
