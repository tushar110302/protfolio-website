import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {

  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased '>
      <div className='fixed top-0 -z-10 w-full h-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className='mx-auto px-8'>

        <Navbar/>
        <Hero/>
        <About />
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
