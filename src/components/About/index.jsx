import React from 'react';
import './index.scss';
import profileImg from '../../assets/images/1.svg';

const About = () =>{

  return(
    <div className="about" id="about">
      <div className="about-container">
        <div className="about-title">
        <div className="title-container">
        <p>About</p>
        <h1></h1>
        </div>
        </div>
        <div className="about-post">
        <div className="image"><img src={profileImg} alt="profile"/></div>
        <div className="about-text">
       Hi, I'm Swapnil Rawat — a software engineer with expertise in FullStack Development. I have a strong track record of improving web performance and building AI-powered features. I enjoy creating scalable, user-focused solutions and thrive in fast-moving, innovative teams.</div>
        </div>
      </div>
    </div>
  )

}

export default About;
