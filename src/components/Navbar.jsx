import React from 'react'
import logo from '../assets/Logo-TR.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

function Navbar() {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex items-center flex-shrink-0'>
            <img src={logo} className='mx-2 w-14' />
        </div>

        <div className='flex items-center justify-center m-8 gap-5 text-3xl'>
            <a href='mailto:thrrnjn1103@gmail.com' target='_blank' className='transition-all hover:scale-110'>
              <SiGmail/>
            </a>
            <a href='https://www.linkedin.com/in/tushar-ranjan-1b033a250/' target='_blank' className='transition-all hover:scale-110'>
              <FaLinkedin />
            </a>
            <a href='https://github.com/tushar110302' target='_blank' className='transition-all hover:scale-110'>
              <FaGithub />
            </a>

        </div>
    </nav>
  )
}

export default Navbar