import React from 'react';
import './index.scss';

const Footer = () =>{
  var date = new Date();
  var year = date.getFullYear();
  return(
    <div className="footer">
      <div className="footer-container">
        <div className="caption">{`${year} `+' © '+' Swapnil Rawat'} | Crafted with <img src={require('../../assets/images/love.png').default}/>by <a href="http://www.instagram.com/swapnilr17">@swapnilr17</a></div>
      </div>
    </div>
  )

}

export default Footer;
