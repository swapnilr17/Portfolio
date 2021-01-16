import React from 'react';
import './index.scss';
import Typical from 'react-typical';
import Typewriter from 'typewriter-effect';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Home = () =>{
  return(
    <div className="home">
  <div className="home-70">
    <div className="home-text">
      <div className="home-text-title">
      Swapnil Rawat
      </div>
      <div className="home-text-p">
        <p>I am a </p><Typewriter options={{strings: ['Web Developer', 'Ui Designer'],autoStart: true,loop: true, pauseFor: '500'}}/>
      </div>
      <div className="social-icons">
        <a href="https://www.twitter.com/XavierGreek"><img src={require("../../assets/images/twitter.svg").default} alt="twitter"/></a>
        <a href="https://dribbble.com/swapnil_r17"><img src={require("../../assets/images/dribbble.svg").default} alt="dribbble"/></a>
        <a href="https://www.github.com/swapnilr17"><img src={require("../../assets/images/github.svg").default} alt="github"/></a>
        <a href="https://www.behance.net/xaviergreek"><img src={require("../../assets/images/behance.svg").default} alt="behance"/></a>
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
