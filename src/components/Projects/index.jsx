import React from 'react';
import './index.scss';
import postdata from '../../Pages/data';

const Project = () =>{

  return(
    <div className="project" id="projects">
      <div className="project-container">
        <div className="project-title">
          <div className="title-container">
          <p>Projects</p>
          <h1> </h1>
          </div>
        </div>
        <div className="grid">
          {postdata.map((post, index)=>(
            <div className="grid-item">
            <div className="grid-image"><img src={post.image} alt="twitter"/></div>
            <div className="grid-title">{post.title}</div>
            <div className="grid-p">{post.tag}</div>
            <div className="grid-button"><a href={post.path} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}><button>View Project</button></a></div>
            </div>
          ))}
        </div>
      </div>
  </div>
  )

}

export default Project
