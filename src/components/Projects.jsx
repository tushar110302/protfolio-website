import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'motion/react'

function Projects() {
  return (
    <div className='border-b border-neutral-900 pb-4 '>
        <motion.h1 
            initial={{opacity:0 , y: -100}}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 0.7}}
            className='my-20 text-center text-4xl '>Projects</motion.h1>

        <div>
            {PROJECTS.map((p) => (
                <div key={p.id} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div 
                        initial={{opacity:0 , x: -100}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration: 0.7}}
                        className='w-full lg:w-1/4'>
                        <img src={p.image} width={200} height={150} className='mb-6 rounded-lg' />
                    </motion.div>
                    <motion.div 
                        initial={{opacity:0 , x: 100}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration: 0.7}}
                        className='w-full lg:w-3/4 max-w-xl'>
                        <h6 className='mb-2 font-semibold'>{p.title}</h6>
                        <p className='mb-4 text-neutral-400 overflow-clip'>{p.description}</p>
                        {p.technologies.map((tech, idx) => (
                            <span key={idx} className='mr-2 py-2 rounded-lg bg-neutral-900 px-2 text-slate-500 text-sm font-medium'>{tech}</span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Projects