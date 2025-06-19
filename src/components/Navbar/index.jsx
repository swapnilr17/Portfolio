import React ,{useState, useContext} from 'react';
import './index.scss';
import { Link, animateScroll as scroll } from 'react-scroll'
import navImg from "../../assets/images/logo.png";
import { ThemeContext } from '../../../src/theme-context';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({toggle,isOpen}) =>{

  const [active, setActive] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

const changeBackground = ()=>{
  if(window.scrollY>= 80){
    setActive(true);
  }
  else{
    setActive(false);
  }
}

const toggleHome = () => {
  scroll.scrollToTop();
}

  window.addEventListener('scroll',changeBackground)
  return(
    <div className= {active ? 'navbar active': 'navbar'}>
    <div className= "nav70">
      <div className="nav-logo">
        <Link to="/" onClick={toggleHome} smooth ={true}
                        duration={500}
                        spy={true}
                        exact ='true'
                        offset={-80}>
                        <img src={navImg} alt="nav-logo"/></Link>
      </div>
      <div className="nav-list">
      <ul className="nav-subheadings">
        <li><Link to="about" smooth ={true}
                        duration={500}
                        spy={true}
                        exact ='true'
                        offset={-80}>About</Link></li>
        <li><Link to="projects" smooth ={true}
                        duration={500}
                        spy={true}
                        exact ='true'
                        offset={-80}>Projects</Link></li>
        <li><Link to="skills" smooth ={true}
                        duration={500}
                        spy={true}
                        exact ='true'
                        offset={-80}>Skills</Link></li>
        <li><Link to="contact" smooth ={true}
                        duration={500}
                        spy={true}
                        exact ='true'
                        offset={-80}>Contact</Link></li>
      </ul>
      <ul className={isOpen ? "burger-menu-active" : "burger-menu"} onClick={toggle} >
        <li id="new1"></li>
        <li id="new2"></li>
        <li id="new3"></li>
      </ul>
      <div className="theme-toggle" onClick={toggleTheme} style={{cursor: 'pointer', marginLeft: '3rem'}}>
        {theme === 'dark' ? <FaSun size={22} color="#FFD700" title="Light mode"/> : <FaMoon size={22} color="#333" title="Dark mode"/>}
      </div>
    </div>
    </div>
  </div>
  )
}

export default Navbar;
