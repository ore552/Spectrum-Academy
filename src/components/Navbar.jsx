import React, { useState } from 'react'   
import { Link } from 'react-router-dom'   
import { FiGitPullRequest } from "react-icons/fi";   
import './NavbarStyles.css'   
import { FaBars, FaTimes } from 'react-icons/fa';
   
const Navbar = () => {   
  const [toggle, setToggle] = useState();   
  const handToggle = () => setToggle(!toggle);   
   
  const [color, setColor] = useState(true);   
  const colorChange = () => {   
    if (window.scrollY > 100) {   
      setColor(true)   
    } else {   
      setColor(false)   
    }   
  }   
   
  window.addEventListener("scroll" , colorChange);   
  return (   
    <div className={color?"header header-bg" : "header"}>   
        <Link  to='/'>   
            <h1 className='h1'>Spectrum Academy <FiGitPullRequest /></h1>   
        </Link>   
           
        <ul className={toggle? "navMenu": "navMenu active"}>   
          <li>   
            <Link to='/'>Home</Link>   
          </li>   
          <li>   
            <Link to='/About'>About us</Link>   
          </li>   
          <li>   
            <Link to='/Contact'>Contact us</Link>   
          </li>   
          <li>   
            <Link to='/Project'>Project</Link>   
          </li>   
        </ul>

        <div className='hamburger' onClick={handToggle}>
          {toggle ? (<FaTimes size={25} style={{color:'white'}}/>) : (<FaBars size={25} style={{color:'white'}}/>)}
        </div>   
    </div>   
  )   
}   
   
export default Navbar   
   