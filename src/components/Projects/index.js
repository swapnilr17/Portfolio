import React from 'react';
import './index.scss';
import {BrowserRouter as Router, Link} from 'react-router-dom'

const Project = () =>{

  return(
    <div className="project" id="projects">
      <div class="project-container">
        <div class="project-title">
          <div class="title-container">
          <p>Projects</p>
          <h1></h1>
          </div>
        </div>
        <div class="grid">
          <div class="grid-item">
          <div class="grid-image"><img src={require('../../assets/images/grid.jpg').default} alt="twitter"/></div>
          <div class="grid-title">Anyone can code</div>
          <div class="grid-p">React Js, Node Js</div>
          <div class="grid-button"><Link to='/post' style={{ textDecoration: 'none' }}><button>View Project</button></Link></div>
          </div>
          <div class="grid-item">
          <div class="grid-image"><img src={require('../../assets/images/grid.jpg').default} alt="twitter"/></div>
          <div class="grid-title">Anyone can code</div>
          <div class="grid-p">Flutter, Dart</div>
          <div class="grid-button"><Link to='/post' style={{ textDecoration: 'none' }}><button>View Project</button></Link></div>
          </div>
          <div class="grid-item">
          <div class="grid-image"><img src={require('../../assets/images/grid.jpg').default} alt="twitter"/></div>
          <div class="grid-title">Anyone can code</div>
          <div class="grid-p">Vue, Nodejs</div>
          <div class="grid-button"><Link to='/post' style={{ textDecoration: 'none' }}><button>View Project</button></Link></div>
          </div>
          <div class="grid-item">
          <div class="grid-image"><img src={require('../../assets/images/grid.jpg').default} alt="twitter"/></div>
          <div class="grid-title">Anyone can code</div>
          <div class="grid-p">Django, Python</div>
          <div class="grid-button"><Link to='/post' style={{ textDecoration: 'none' }}><button>View Project</button></Link></div>
          </div>
          <div class="grid-item">
          <div class="grid-image"><img src={require('../../assets/images/grid.jpg').default} alt="twitter"/></div>
          <div class="grid-title">Anyone can code</div>
          <div class="grid-p">REST, Graphql</div>
          <div class="grid-button"><Link to='/post' style={{ textDecoration: 'none' }}><button>View Project</button></Link></div>
          </div>
          <div class="grid-item">
          <div class="grid-image"><img src={require('../../assets/images/grid.jpg').default} alt="twitter"/></div>
          <div class="grid-title">Anyone can code</div>
          <div class="grid-p">Android, Java</div>
          <div class="grid-button"><Link to='/post' style={{ textDecoration: 'none' }}><button>View Project</button></Link></div>
          
          </div>
        </div>
      </div>
  </div>
  )

}

export default Project
