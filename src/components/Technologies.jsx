import React from 'react'
import {  DiMongodb } from 'react-icons/di'
import { FaGithub } from 'react-icons/fa'
import { RiJavascriptFill, RiNodejsFill, RiReactjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { motion } from 'motion/react'

function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2 
            initial={{opacity:0 , y: -100}}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 0.7}}
            className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div 
            initial={{opacity:0 , x: -100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration: 0.7}}
            className='flex justify-center items-center flex-wrap gap-4'>
            <motion.div 
                initial={{y: -10}}
                animate={{y: [-10, 10]}}
                transition={{duration: 2, ease: "linear", repeat: Infinity, repeatType: "reverse"}}
                className='rounded-2xl border-4 p-4 border-neutral-800'>
                <RiReactjsFill className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
                initial={{y: -10}}
                animate={{y: [-10, 10]}}
                transition={{duration: 3, ease: "linear", repeat: Infinity, repeatType: "reverse"}}
                className='rounded-2xl border-4 p-4 border-neutral-800'>
                <RiNodejsFill className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div 
                initial={{y: -10}}
                animate={{y: [-10, 10]}}
                transition={{duration: 2.5, ease: "linear", repeat: Infinity, repeatType: "reverse"}}
                className='rounded-2xl border-4 p-4 border-neutral-800'>
                <RiTailwindCssFill className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
                initial={{y: -10}}
                animate={{y: [-10, 10]}}
                transition={{duration: 13, ease: "linear", repeat: Infinity, repeatType: "reverse"}}
                className='rounded-2xl border-4 p-4 border-neutral-800'>
                <SiExpress className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
                initial={{y: -10}}
                animate={{y: [-10, 10]}}
                transition={{duration: 1.5, ease: "linear", repeat: Infinity, repeatType: "reverse"}}
                className='rounded-2xl border-4 p-4 border-neutral-800'>
                <DiMongodb className='text-7xl text-green-600'/>
            </motion.div>
            <motion.div 
                initial={{y: -10}}
                animate={{y: [-10, 10]}}
                transition={{duration: 3.5, ease: "linear", repeat: Infinity, repeatType: "reverse"}}
                className='rounded-2xl border-4 p-4 border-neutral-800'>
                <RiJavascriptFill className='text-7xl text-yellow-300'/>
            </motion.div>
            <motion.div 
                initial={{y: -10}}
                animate={{y: [-10, 10]}}
                transition={{duration: 1.5, ease: "linear", repeat: Infinity, repeatType: "reverse"}}
                className='rounded-2xl border-4 p-4 border-neutral-800'>
                <FaGithub className='text-7xl text-white'/>
            </motion.div>
            <motion.div 
                initial={{y: -10}}
                animate={{y: [-10, 10]}}
                transition={{duration: 3, ease: "linear", repeat: Infinity, repeatType: "reverse"}}
                className='rounded-2xl border-4 p-4 border-neutral-800'>
                <VscVscode className='text-7xl text-blue-500'/>
            </motion.div>

        </motion.div>
    </div>
  )
}

export default Technologies