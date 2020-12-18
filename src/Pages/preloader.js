import React from 'react';
import './preloader.scss';

const Preloader = ({mounted}) =>{

  return(
    <div className={mounted ? "nopreloader" : "preloader"}>
    </div>
  )
}

export default Preloader;
