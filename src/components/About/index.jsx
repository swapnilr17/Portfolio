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
        Hello my name is Swapnil Rawat. I am a student who is pursuing BTech CSE with specialization in Cloud Computing at Graphic Era Hill University, Dehradun. I am really passionate about the cloud technology with experience in Web Development.</div>
        </div>
      </div>
    </div>
  )

}

export default About;
