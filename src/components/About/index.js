import React from 'react';
import './index.scss';

const About = () =>{

  return(
    <div className="about" id="about">
      <div className="about-container">
        <div class="about-title">
        <div className="title-container">
        <p>About</p>
        <h1></h1>
        </div>
        </div>
        <div class="about-post">
        <div class="image"><img src={require('../../assets/images/grid.jpg').default}/></div>
        <div class="about-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
        </div>
      </div>
    </div>
  )

}

export default About;
