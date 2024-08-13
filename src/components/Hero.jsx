import React from 'react'
import Spec from "./images/spectrum.jpg"
import './HeroStyle.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='bgimg' src={Spec} alt="" />
        </div>

        <div className='content'>
            <p className='bige'>'..Quisque mereatur discere quod volunt...' <br /> Everyone deserves to learn what they want</p>
            <p className='bige'>"...Omnis sententia examinanda..." <br /> Every view must be examined</p>
            <h1 className='big'>Welcome to the Spectrum Academy!!!</h1>

            <div className='btnholder'>
                <Link to='/Contact'>
                    <button className='btn'>Get Started</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero

// Universal Academy
// Allfield Academy
// Holistic Learning School
// Broadview Institute
// Comprehensive Learning Center
// Panorama Academy
// Well-rounded Learning School
// Spectrum Academy
// Unity School of Learning
// OmniEdu Institute
// Wide Horizons School
// Total Learning Academy
// Integral Education Institute
// General Studies School
// All-Encompass Academy
