import React from 'react';
import './index.scss';

const Footer = () =>{
  var date = new Date();
  var year = date.getFullYear();
  return(
    <div className="footer">
      <div className="footer-container">
        <div className="caption">{`${year}` + ' © ' + ' Copyright'}</div>
      </div>
    </div>
  )

}

export default Footer;
