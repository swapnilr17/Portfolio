import React from 'react';
import './index.scss';

const Project = () =>{

  return(
    <div className="project">
      <div class="project-container">
        <div class="project-title">
          Projects
        </div>
        <div class="grid">
          <div class="grid-item">
          <div class="grid-image"><img src={require('../../assets/images/grid.jpg').default}/></div>
          <div class="grid-title">Anyone can code</div>
          <div class="grid-p">Lorem ipsum to the main to the power</div>
          <div class="grid-button"><button>Submit</button> </div>
          </div>
          <div class="grid-item">
          <div class="grid-image"><img src={require('../../assets/images/grid.jpg').default}/></div>
          <div class="grid-title">Anyone can code</div>
          <div class="grid-p">Lorem ipsum to the main to the power</div>
          <div class="grid-button"><button>Submit</button> </div>
          </div>
          <div class="grid-item">
          <div class="grid-image"><img src={require('../../assets/images/grid.jpg').default}/></div>
          <div class="grid-title">Anyone can code</div>
          <div class="grid-p">Lorem ipsum to the main to the power</div>
          <div class="grid-button"><button>Submit</button> </div>
          </div>
          <div class="grid-item">
          <div class="grid-image"><img src={require('../../assets/images/grid.jpg').default}/></div>
          <div class="grid-title">Anyone can code</div>
          <div class="grid-p">Lorem ipsum to the main to the power</div>
          <div class="grid-button"><button>Submit</button> </div>
          </div>
          <div class="grid-item">
          <div class="grid-image"><img src={require('../../assets/images/grid.jpg').default}/></div>
          <div class="grid-title">Anyone can code</div>
          <div class="grid-p">Lorem ipsum to the main to the power</div>
          <div class="grid-button"><button>Submit</button> </div>
          </div>
          <div class="grid-item">
          <div class="grid-image"><img src={require('../../assets/images/grid.jpg').default}/></div>
          <div class="grid-title">Anyone can code</div>
          <div class="grid-p">Lorem ipsum to the main to the power</div>
          <div class="grid-button"><button>Submit</button> </div>
          </div>
        </div>
      </div>
  </div>
  )

}

export default Project
