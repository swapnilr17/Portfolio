import React from 'react';
import './index.scss';
import postdata from '../../Pages/data';
import { getTechIcons } from './techIcons'; // Import the tech icons mapping function
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
            <div className="grid-image"><img src={post.image} href={post.path} alt="twitter"/></div>
            <div className='grid-content'>
            <div className="grid-title" href={post.path}>{post.title}</div>
            <div className="grid-p">{getTechIcons(post.tag).map((icon, i) => (
    <span key={i} className="tech-icon">{icon}</span>
  ))}</div>
            {/* <div className="grid-button"><a href={post.path} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}><button>View Project</button></a></div> */}
            </div>
            </div>
          ))}
        </div>
      </div>
  </div>
  )

}

export default Project
