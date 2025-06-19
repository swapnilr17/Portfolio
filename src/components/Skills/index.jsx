import React from 'react';
import './index.scss';
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaReact, FaNodeJs, FaPython, FaCss3Alt } from 'react-icons/fa';
import { SiRedux, SiTypescript, SiPostgresql, SiMongodb, SiGraphql, SiNextdotjs } from 'react-icons/si';

const Skills = () => {
  return(
    <div className="skills" id="skills">
      <div className="skills-conatainer">
        <div className="skills-title">
          <div className="title-container">
            <p>Skills</p>
            <h1></h1>
          </div>
        </div>
        <div className="skill-grid">
       
          <div className="skill-item">
            <div className="skill-image"><FaReact size={50} color="#61DBFB" title="React" /></div>
            <div className="skill-title">React Js</div>
          </div>
          <div className="skill-item">
            <div className="skill-image"><FaPython size={50} color="#3776AB" title="Python" /></div>
            <div className="skill-title">Python</div>
          </div>
           <div className="skill-item">
            <div className="skill-image"><SiNextdotjs size={50} color="#000" title="Next.js" /></div>
            <div className="skill-title">Next.js</div>
          </div>
          <div className="skill-item">
            <div className="skill-image"><FaCss3Alt size={50} color="#264DE4" title="CSS" /></div>
            <div className="skill-title">CSS</div>
          </div>
             <div className="skill-item">
            <div className="skill-image"><SiMongodb size={50} color="#4DB33D" title="MongoDB" /></div>
            <div className="skill-title">MongoDB</div>
          </div>
          <div className="skill-item">
            <div className="skill-image"><FaNodeJs size={50} color="#3C873A" title="Node.js" /></div>
            <div className="skill-title">Node Js</div>
          </div>
          <div className="skill-item">
            <div className="skill-image"><SiRedux size={50} color="#764ABC" title="Redux" /></div>
            <div className="skill-title">Redux</div>
          </div>
          <div className="skill-item">
            <div className="skill-image"><SiTypescript size={50} color="#3178C6" title="TypeScript" /></div>
            <div className="skill-title">TypeScript</div>
          </div>
          <div className="skill-item">
            <div className="skill-image"><SiPostgresql size={50} color="#336791" title="PostgreSQL" /></div>
            <div className="skill-title">PostgreSQL</div>
          </div>
          <div className="skill-item">
            <div className="skill-image"><SiGraphql size={50} color="#E535AB" title="GraphQL" /></div>
            <div className="skill-title">GraphQL</div>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Skills;
