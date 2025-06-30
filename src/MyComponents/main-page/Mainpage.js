import React from 'react'
import Navbar from './header/Navbar'
import Home from './Home/Home'
import Project from './projects/Project'
import About from './about/About'
import Footer from './footer/Footer'

const Mainpage = () => {
  return (
    <>
    
        <Navbar />
        <Home />
        <Project />
        <About />
        <Footer />
    </>
  )
}

export default Mainpage