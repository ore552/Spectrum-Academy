import React from 'react'
import Navbar from '../components/Navbar'
import Hero2 from '../components/Hero2'
import ProjectCards from '../components/ProjectCards'
import Footer from '../components/Footer'
const Project = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading={"Project"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
      <ProjectCards />
      <Footer/>
    </div>
  )
}

export default Project
