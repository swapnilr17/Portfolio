import React from 'react';
import './index.scss';

const Footer = () =>{
  var date = new Date();
  var year = date.getFullYear();
  return(
    <div className="footer">
      <div className="footer-container">
        <div className="caption">{'Swapnil Rawat'+' © '+`${year} `}</div>
        <div className="caption-second"><a href="http://www.instagram.com/swapnilr17">Instagram</a><a href="http://www.github.com/swapnilr17">github</a></div>
      </div>
    </div>
  )

}

export default Footer;
