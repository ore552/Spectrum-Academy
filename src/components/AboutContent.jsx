import React from 'react';
import { NavLink } from 'react-router-dom';
import Top from './images/piccy.jpg';
import Bottom from './images/piccy2.jpg';
import './AboutContentStyles.css';

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who we are:</h1>
            <p>Hello and welcome! We are the Spectrum Academy, we make sure that everyone(even grandparents) can get the healthy dose of a 'spectrum' of different subjects that are relevant to this day. We make sure that we prioritize on different subjects (e.g maybe a bit more of math or english, you get the point) depending on what you want to do in the future. We have an amazing 'spectrum' of teacher (100 per subject per school) that include pre-school, primary, secondary, college, university (where you can earn degrees) and a level specifically for the retired, so come on and enjoy learning!</p>

            <NavLink className='btnAbout' to={"/Contact"}>Contact Us</NavLink>
        </div>

        <div className='right'>
            <div className='imgContainer'>
                <div className='imgStack top'>
                  <img src={Top} alt="" />
                </div>

                <div className='imgStack bottom'>
                  <img src={Bottom} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
