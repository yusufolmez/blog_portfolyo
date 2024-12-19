import React from 'react'
import profilePic from '../assets/profile.jpg';
import { motion } from "motion/react"


const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 w-full'>
        <h1 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h1>
        <div className='flex flex-wrap'>
            <motion.div 
             whileInView={{ opacity: 1, x:0}}
             initial={{ opacity: 0, x: -100}}
             transition={{ duration: 0.5}}
             className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img className='rounded-2xl' src={profilePic} alt='Yusuf Ölmez'/>
                </div>
            </motion.div>
            <motion.div
             whileInView={{ opacity: 1, x:0}}
             initial={{ opacity: 0, x: 100}}
             transition={{ duration: 0.5}}
             className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start'>
                    <p className='my-w max-w-xl py-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium aliquid odio, praesentium nemo quo, omnis dolorum iure illum quisquam sunt incidunt maxime magni veritatis placeat. Reprehenderit beatae assumenda tenetur iusto!</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About
