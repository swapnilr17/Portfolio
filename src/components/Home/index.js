import React from 'react';
import './index.scss';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Home = () =>{
  return(
    <div className="home">
  <div className="home-70">
    <div className="home-text">
      <div className="home-text-title">
      HEY WELCOME
      </div>
      <div className="home-text-p">
        Hello My Name is Swapnil Rawat and this is my portfolio webpage. Scroll down or click on Projects to checkout my all projects.
      </div>
      <div className="social-icons">
        <img src={require("../../assets/images/twitter.svg").default} alt="twitter"/>
        <img src={require("../../assets/images/dribbble.svg").default} alt="dribbble"/>
        <img src={require("../../assets/images/github.svg").default} alt="github"/>
        <img src={require("../../assets/images/behance.svg").default} alt="behance"/>
      </div>
      <div className="home-button"><Link to="projects" smooth ={true}
                        duration={500}
                        spy={true}
                        exact ='true'
                        offset={-80}><button>Projects</button></Link></div>
    </div>
    <div className="home-image"><img src={require("../../assets/images/blogging.png").default}/></div>
  </div>
</div>

  )
}

export default Home;
