import React from 'react';
import './index.css';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Sidebar = ({isOpen,toggle}) =>{
  return(
    <div className= {isOpen ? "sidebar-active" : "sidebar"} onClick={toggle}>
    <ul>
    <li><Link to="about" smooth ={true} duration={500} spy={true} exact ='true' offset={-80} onClick={toggle}>About</Link></li>
    <li><Link to="projects" smooth ={true} duration={500} spy={true} exact ='true' offset={-80} onClick={toggle}>Projects</Link></li>
    <li><Link to="skills" smooth ={true} duration={500} spy={true} exact ='true' offset={-80} onClick={toggle}>Skills</Link></li>
    <li><Link to="contact" smooth ={true} duration={500} spy={true} exact ='true' offset={-80} onClick={toggle}>Contact</Link></li>
    </ul>
  </div>
  )
}

export default Sidebar;
