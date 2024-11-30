import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'motion/react'

function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-20 ' id='contact'>
        <motion.h1 
            initial={{opacity:0 , y: -100}}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 0.7}}
            className='my-10 text-center text-4xl '>Get in Touch</motion.h1>
        <motion.div 
            initial={{opacity:0 , y: -100}}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 0.7}}
            className='text-center'>
            <p className='my-4 text-slate-300'> Email: {CONTACT.email}</p>
        </motion.div>
        <motion.div 
            initial={{opacity:0 , y: -100}}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 0.7}}
            className='w-full text-center p-2 mb-6'>
            <a href='https://drive.google.com/file/d/1jcbM4HrP_1F1SDB4h13X8Z8CTLbmWUef/view?usp=sharing' target='_blank'>
            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 transition-all hover:scale-110 focus:ring-4 focus:outline-none focus:ring-blue-300 inline-flex items-center dark:focus:ring-blue-800 font-semibold rounded-full text-lg px-7 py-4 text-center me-2">
                <svg class="w-6 h-6 text-gray-800 dark:text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Z" clip-rule="evenodd"/></svg>
                    Resume
                </button>
            </a>
        </motion.div>
        <div className='flex justify-center flex-wrap gap-4'>
            <motion.a 
                initial={{opacity:0 , x: -100}}
                whileInView={{opacity:1, x:0}}
                transition={{duration: 0.7}}
                href='mailto:thrrnjn1103@gmail.com' target='_blank'>
                <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 transition-all hover:scale-110 font-medium rounded-2xl text-md px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                    <svg class="w-6 h-6 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                    </svg>
                    Mail
                </button>
            </motion.a>
            <motion.a 
                initial={{opacity:0 , y: 50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration: 0.7}}
                href='https://github.com/tushar110302' target='_blank'>
                <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 transition-all hover:scale-110 font-medium rounded-2xl text-md px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                    <svg class="w-6 h-6 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                    </svg>  
                    Github
                </button>
            </motion.a>
            <motion.a 
                initial={{opacity:0 , x: 100}}
                whileInView={{opacity:1, x:0}}
                transition={{duration: 0.7}}
                href='https://www.linkedin.com/in/tushar-ranjan-1b033a250/' target='_blank'>
                <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 transition-all hover:scale-110 font-medium rounded-2xl text-md px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                    <svg class="w-6 h-6 me-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 25">
                    <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                    </svg>
                    Linkedin
                </button>
            </motion.a>

        </div>
        

    </div>
  )
}

export default Contact