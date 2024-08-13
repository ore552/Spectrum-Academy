import React from 'react'
import Navbar from '../components/Navbar'
import Hero2 from '../components/Hero2'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading={"Contact"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact
