import React from 'react';
import './index.scss';

const Home = () =>{
  return(
    <div class="home">
  <div class="home-70">
    <div class="home-text">
      <div class="home-text-title">
      New Era New Need
      </div>
      <div class="home-text-p">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </div>
      <div class="social-icons">
        <img src={require("../../assets/images/twitter.svg").default} alt="twitter"/>
        <img src={require("../../assets/images/dribbble.svg").default}/>
        <img src={require("../../assets/images/github.svg").default}/>
        <img src={require("../../assets/images/behance.svg").default}/>
      </div>
      <div class="home-button"><button>Projects</button></div>
    </div>
    <div class="home-image"><img src={require('../../assets/images/main.svg').default}></img></div>
  </div>
</div>

  )
}

export default Home;
