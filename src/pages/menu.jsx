import React from 'react'
import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";

import { NavLink } from "react-router-dom";
import { BsFillHouseFill, BsFillPersonFill, BsFillFileEarmarkWordFill, BsFillEnvelopeFill } from "react-icons/bs";

const Menu = ({image}) => {
  return (
    <>
    <header id="header">
    <div class="d-flex flex-column">

      <div class="profile"> 
        <img src={image} alt="" class="img-fluid rounded-circle" />
        <h1 class="text-light text-center">Pc Adventure</h1>
        <div class="social-links mt-3 text-center">
          <FiTwitter />
          <FiFacebook />
          <FiInstagram />
          <FiLinkedin />
          <FiGithub />
        </div>
      </div>

      <nav id="navbar" class="nav-menu navbar">
        <ul>
          <li><NavLink to="/" class="nav-link scrollto"><BsFillHouseFill /> <span>Home</span></NavLink></li>
          <li><NavLink to="/about" class="nav-link scrollto"><BsFillPersonFill /> <span>About</span></NavLink></li>
          <li><NavLink to="/resume" class="nav-link scrollto"><BsFillFileEarmarkWordFill /> <span>Resume</span></NavLink></li> 
          <li><NavLink to="/contact" class="nav-link scrollto"><BsFillEnvelopeFill /> <span>Contact</span></NavLink></li> 

        </ul>
      </nav>
    </div>
  </header>
  <footer id="footer" className='text-center'>
      <div class="copyright">
        © Copyright <strong><span>Pc Adventure</span></strong>
      </div>
      <div class="credits">
        Designed by <a href="/">Pc163</a>
      </div>

  </footer>
    </>
  )
}

export default Menu