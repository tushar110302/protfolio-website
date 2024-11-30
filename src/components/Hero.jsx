import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePhoto from '../assets/kevinRushProfile.png'
import { motion } from "motion/react"

function Hero() {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>

            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center  text-center'>
                    <motion.h3 
                        initial={{x:-100, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration: 0.5, delay:0}}
                        className='text-5xl font-extralight mx-auto '>Hi, I'm </motion.h3>
                    <motion.h1
                        initial={{x:-100, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration: 0.5, delay:0.3}} 
                        className='pb-12 text-6xl font-thin mt-12 lg:mt-10 lg:text-8xl tracking-tight'>
                            Tushar Ranjan
                    </motion.h1>
                    <motion.span 
                        initial={{x:-100, opacity: 0}}
                        animate={{x:0, opacity: 1}}
                        transition={{duration: 0.5, delay:0.5}}
                        className='mx-auto bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                            Full Stack Developer
                    </motion.span>

                    <motion.p 
                        initial={{x:-100, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration: 0.5, delay:0.7}}
                        className='my-2 py-6  max-w-xl text-slate-500'>
                        {HERO_CONTENT} 
                    </motion.p>
                    <motion.div 
                        initial={{x:-100, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration: 0.5, delay:0.8}}
                        className='flex flex-col'>
                        <a href='https://drive.google.com/file/d/1jcbM4HrP_1F1SDB4h13X8Z8CTLbmWUef/view?usp=sharing' target='_blank'>
                            <motion.button type="button" className="transition-all hover:scale-110 text-white bg-gradient-to-r from-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-semibold rounded-full text-xl px-7 py-4 text-center me-2 inline-flex items-center ">
                                <svg class="w-6 h-6 text-gray-800 dark:text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Z" clip-rule="evenodd"/></svg>
                                Resume
                            </motion.button>
                        </a>
                        <a href='#contact' className=' mt-5 mb-10 text-lg  bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent hover:scale-110 transition-all'>
                            Contact Me
                        </a>
                    </motion.div>
                </div>
            </div>

            <motion.div 
                initial={{x:100, opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{duration: 1, delay:0.5}}
                className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <img src={profilePhoto} />
                </div>
            </motion.div>
        </div>

    </div>
  )
}

export default Hero