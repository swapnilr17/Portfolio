import React ,{useState} from 'react';
import './index.scss';

const Navbar = ({toggle,isOpen}) =>{

  const [active, setActive] = useState(false);


const changeBackground = ()=>{
  if(window.scrollY>= 80){
    setActive(true);
  }
  else{
    setActive(false);
  }
}
  window.addEventListener('scroll',changeBackground)
  return(
    <div className= {active ? 'navbar active': 'navbar'}>
    <div className= "nav70">
      <div class="nav-title">
        Swapnil
      </div>
      <div class="nav-list">
      <ul class="nav-subheadings">
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/skills">Skills</a></li>
      </ul>
      <ul className={isOpen ? "burger-menu-active" : "burger-menu"} onClick={toggle} >
        <li id="new1"></li>
        <li id="new2"></li>
        <li id="new3"></li>
      </ul>
    </div>
    </div>
  </div>
  )
}

export default Navbar;
