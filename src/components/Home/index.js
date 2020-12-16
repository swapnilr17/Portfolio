import React from 'react';
import './index.scss';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Home = () =>{
  return(
    <div className="home">
  <div className="home-70">
    <div className="home-text">
      <div className="home-text-title">
      New Era New Need
      </div>
      <div className="home-text-p">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
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
    <div className="home-image"><img src={require('../../assets/images/main4.svg').default} alt="main"/></div>
  </div>
</div>

  )
}

export default Home;
