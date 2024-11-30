import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'motion/react'

function Experience() {
  return (
    <div className='border-b border-neutral-900 pb-4 '>
        <motion.h1 
            initial={{opacity:0 , y: -100}}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 0.7}}
            className='my-20 text-center text-4xl '>
                Experiences
        </motion.h1>

        <div>
            {EXPERIENCES.map((exp) => (
                <div key={exp.id} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div 
                        initial={{opacity:0 , x: -100}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration: 0.7}}
                        className='w-full lg:w-1/4'>
                        <p className='mb-2 text-sm text-neutral-400'>{exp.year}</p>
                    </motion.div>
                    <motion.div 
                        initial={{opacity:0 , x: 100}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration: 0.7}}
                        className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>
                            {exp.role} - <span className='text-sm text-purple-100'>{exp.company}</span>
                        </h6>
                        <p className='mb-4 text-neutral-400  '>
                        - Enhanced the mediator systems efficiency by developing JavaScript, Python, and folder monitor scripts for automated material upload, validation, and continuous folder monitoring, leading to decreased upload times and increased upload speeds. <br/>
                        - Created scheduled reports using SQL, tested and ensured accurate data generation and seamless functionality on the UI, which enhanced reporting efficiency and reliability. <br/>   
                        - Monitored mediator system logs to ensure synchronization and operational stability, proactively identifying issues and resolving errors to maintain smooth system performance. <br/>
                        - Addressed and resolved tickets raised by customers and support teams through JIRA, managing tasks and troubleshooting issues to ensure proper working of the systems.
                        </p>
                        {exp.technologies.map((tech, idx) => (
                            <span key={idx} className='mr-2 py-2 rounded-lg bg-neutral-900 px-2 text-slate-500 text-sm font-medium'>{tech}</span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Experience