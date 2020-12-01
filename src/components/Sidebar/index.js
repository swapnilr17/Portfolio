import React from 'react';
import './index.css';

const Sidebar = ({isOpen}) =>{
  return(
    <div className= {isOpen ? "sidebar-active" : "sidebar"}>
    <ul>
    <li>Projects</li>
    <li>Skills</li>
    <li>Contact</li>
    </ul>
  </div>
  )
}

export default Sidebar;
