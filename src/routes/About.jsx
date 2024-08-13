import React from 'react'
import Navbar from '../components/Navbar'
import Hero2 from '../components/Hero2'
import AboutContent from '../components/AboutContent'
import Footer from '../components/Footer'


const About = () => {
  return (
    <div>
      <Navbar />

      {/* <h1>This is the about us page</h1> */}
      <Hero2 heading={"About"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}/>       <AboutContent />
      <Footer/>
    </div>
  )
}

export default About
