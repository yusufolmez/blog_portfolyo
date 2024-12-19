import profilePic from '../assets/profile.jpg';
import Project from './Projects';
import Yetenekler from './Yetenekler';
import { motion } from "motion/react"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay}
    }
})

const Hero = () => {



    return ( 
        <div>
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap"> 
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Yusuf Ölmez</motion.h1>
                        <motion.span 
                            variants={container(0.3)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Software Engineer</motion.span>
                            <motion.p 
                            variants={container(0.6)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-tight tracking-tighter">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium aliquid odio, praesentium nemo quo, omnis dolorum iure illum quisquam sunt incidunt maxime magni veritatis placeat. Reprehenderit beatae assumenda tenetur iusto!</motion.p>  
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8 ">
                    <div className="flex justify-center">
                        <motion.img  
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x:0, opacity: 1}}
                        transition={{ duration: 1, delay: 0.9}}
                        src={profilePic} alt='Yusuf Ölmez'/>
                    </div>
                </div>
            </div>  
        </div>
        <div className='flex flex-auto'><Project /></div>
        <div className='flex flex-auto'><Yetenekler /></div>
        </div>
    );
};

export default Hero;