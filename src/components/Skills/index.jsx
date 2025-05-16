import React from 'react';
import './index.scss';
import { BsStarFill,BsStarHalf,BsStar } from "react-icons/bs";
import cImg from '../../assets/images/c.svg';
import cppImg from '../../assets/images/c++.svg';
import javaImg from '../../assets/images/java.svg';
import jsImg from '../../assets/images/js.svg';
import reactImg from '../../assets/images/react.svg';
import pythonImg from '../../assets/images/python.svg';
import cssImg from '../../assets/images/css.svg';
import nodeImg from '../../assets/images/node.svg';

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
        <div className="skill-image"><img src={cImg} alt="twitter"/></div>
          <div className="skill-title">C</div>
          <div className="skill-star"><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarHalf color={'#FDCC36'} size={25}/></div>
        </div>
        <div className="skill-item">
        <div className="skill-image"><img src={cppImg} alt="twitter"/></div>
          <div className="skill-title">C++</div>
          <div className="skill-star"><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarHalf color={'#FDCC36'} size={25}/></div>
        </div>
        <div className="skill-item">
        <div className="skill-image"><img src={javaImg} alt="twitter"/></div>
          <div className="skill-title">java</div>
          <div className="skill-star"><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarHalf color={'#FDCC36'} size={25}/></div>
        </div>
        <div className="skill-item">
        <div className="skill-image"><img src={jsImg} alt="twitter"/></div>
          <div className="skill-title">JavaScript</div>
          <div className="skill-star"><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarHalf color={'#FDCC36'} size={25}/></div>
        </div>
        <div className="skill-item">
        <div className="skill-image"><img src={reactImg} alt="twitter"/></div>
          <div className="skill-title">React Js</div>
          <div className="skill-star"><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarHalf color={'#FDCC36'} size={25}/></div>
        </div>
        <div className="skill-item">
        <div className="skill-image"><img src={pythonImg} alt="twitter"/></div>
          <div className="skill-title">Python</div>
          <div className="skill-star"><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarHalf color={'#FDCC36'} size={25}/></div>
        </div>
        <div className="skill-item">
        <div className="skill-image"><img src={cssImg} alt="twitter"/></div>
          <div className="skill-title">CSS</div>
          <div className="skill-star"><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarHalf color={'#FDCC36'} size={25}/></div>
        </div>
        <div className="skill-item">
        <div className="skill-image"><img src={nodeImg} alt="twitter"/></div>
          <div className="skill-title">Node Js</div>
          <div className="skill-star"><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarFill color={'#FDCC36'} size={25}/><BsStarHalf color={'#FDCC36'} size={25}/></div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Skills;
