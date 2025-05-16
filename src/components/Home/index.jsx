import React from 'react';
import './index.scss';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll'
import twitterImg from "../../assets/images/twitter.svg";
import dribbbleImg from "../../assets/images/dribbble.svg";
import githubImg from "../../assets/images/github.svg";
import behanceImg from "../../assets/images/behance.svg";
import bloggingImg from "../../assets/images/blogging.png";

const Home = () =>{
  return(
    <div className="home">
  <div className="home-70">
    <div className="home-text">
      <div className="home-text-title">
      Swapnil Rawat
      </div>
      <div className="home-text-p">
       <span className="iam">I am a </span><Typewriter options={{strings: ['Web Developer', 'Ui Designer','Tech Enthusiast'],autoStart: true,loop: true, pauseFor: '500'}}/>
      </div>
      <div className="social-icons">
        <a href="https://www.twitter.com/XavierGreek"><img src={twitterImg} alt="twitter"/></a>
        <a href="https://dribbble.com/swapnil_r17"><img src={dribbbleImg} alt="dribbble"/></a>
        <a href="https://www.github.com/swapnilr17"><img src={githubImg} alt="github"/></a>
        <a href="https://www.behance.net/xaviergreek"><img src={behanceImg} alt="behance"/></a>
      </div>
      <div className="home-button"><Link to="projects" smooth ={true}
                        duration={500}
                        spy={true}
                        exact ='true'
                        offset={-80}><button>Projects</button></Link></div>
    </div>
    <div className="home-image"><img src={bloggingImg} alt="home"/></div>
  </div>
</div>

  )
}

export default Home;
