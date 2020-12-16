import React from 'react';
import './index.scss';
import { BsStarFill,BsStarHalf,BsStar } from "react-icons/bs";
const Skills = () => {

  return(
    <div className="skills" id="skills">
      <div className="skills-conatainer">
      <div className="skills-title">
      <div className="title-container">
      <p>Skills</p>
      <h1></h1>
      </div>
      </div>
      <div className="skill-grid">
        <div className="skill-item">
        <div className="skill-image"><img src={require('../../assets/images/c.svg').default} alt="twitter"/></div>
          <div className="skill-title">C</div>
          <div className="skill-star"><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarHalf color={'#FDCC36'} size={25}/></div>
        </div>
        <div className="skill-item">
        <div className="skill-image"><img src={require('../../assets/images/c++.svg').default} alt="twitter"/></div>
          <div className="skill-title">C++</div>
          <div className="skill-star"><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarHalf color={'#FDCC36'} size={25}/></div>
        </div>
        <div className="skill-item">
        <div className="skill-image"><img src={require('../../assets/images/java.svg').default} alt="twitter"/></div>
          <div className="skill-title">java</div>
          <div className="skill-star"><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarHalf color={'#FDCC36'} size={25}/></div>
        </div>
        <div className="skill-item">
        <div className="skill-image"><img src={require('../../assets/images/js.svg').default} alt="twitter"/></div>
          <div className="skill-title">JavaScript</div>
          <div className="skill-star"><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarHalf color={'#FDCC36'} size={25}/></div>
        </div>
        <div className="skill-item">
        <div className="skill-image"><img src={require('../../assets/images/react.svg').default} alt="twitter"/></div>
          <div className="skill-title">React Js</div>
          <div className="skill-star"><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarHalf color={'#FDCC36'} size={25}/></div>
        </div>
        <div className="skill-item">
        <div className="skill-image"><img src={require('../../assets/images/python.svg').default} alt="twitter"/></div>
          <div className="skill-title">Python</div>
          <div className="skill-star"><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarHalf color={'#FDCC36'} size={25}/></div>
        </div>
        <div className="skill-item">
        <div className="skill-image"><img src={require('../../assets/images/css.svg').default} alt="twitter"/></div>
          <div className="skill-title">CSS</div>
          <div className="skill-star"><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarHalf color={'#FDCC36'} size={25}/></div>
        </div>
        <div className="skill-item">
        <div className="skill-image"><img src={require('../../assets/images/node.svg').default} alt="twitter"/></div>
          <div className="skill-title">Node Js</div>
          <div className="skill-star"><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarHalf color={'#FDCC36'} size={25}/></div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Skills;
