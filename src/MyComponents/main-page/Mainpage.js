import React from 'react'
import Navbar from './header/Navbar'
import Home from './Home/Home'
import Project from './projects/Project'
import About from './about/About'

const Mainpage = () => {
  return (
    <>
    
        <Navbar />
        <Home />
        <Project />
        <About />
    </>
  )
}

export default Mainpage