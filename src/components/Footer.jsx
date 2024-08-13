import React from 'react'
import './FooterStyles.css'
import { FaHome, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer lastf'>
        <div className='address'>
            <div className='addline'>
                <FaHome/>
                <p>14th Devon Street ME17 H867</p>
            </div>
            <div className='addline'>
                <FaPhone/>
                <p>986435345, </p>
                <p>458934534</p>
            </div>
            <div className='addline'>
                <FaMailBulk/>
                <p>Spectrum@gmail.com, Pspectrum@gmail.com</p>
            </div>
        </div>
        <div className='footerabout'>
            <h2>About the school</h2>
            <p>This school has one of the biggest teachers to students with a whopping 1:6!</p>
            <div className='footericons'>
                <FaXTwitter  size={30}/>
                <FaFacebookSquare className='facebook' size={30}/>
                <FaLinkedin  size={30}/>
            </div>
        </div>
    </div>
  )
}

export default Footer
