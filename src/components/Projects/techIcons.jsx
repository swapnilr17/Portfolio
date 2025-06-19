// Map tech keywords to Lucide icons
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiRedux, SiFirebase } from 'react-icons/si';

export function getTechIcons(tag) {
  const techMap = {
    react: <FaReact title="React" color="#61DBFB" />,
    'react js': <FaReact title="React" color="#61DBFB" />,
    'reactjs': <FaReact title="React" color="#61DBFB" />,
    node: <FaNodeJs title="Node.js" color="#3C873A" />,
    'node js': <FaNodeJs title="Node.js" color="#3C873A" />,
    nodejs: <FaNodeJs title="Node.js" color="#3C873A" />,
    mongodb: <SiMongodb title="MongoDB" color="#4DB33D" />,
    'mongo db': <SiMongodb title="MongoDB" color="#4DB33D" />,
    redux: <SiRedux title="Redux" color="#764ABC" />,
    firebase: <SiFirebase title="Firebase" color="#FFCA28" />,
    database: <FaDatabase title="Database" color="#4DB33D" />,
  };
  return tag
    .split(',')
    .map(t => t.trim().toLowerCase())
    .map(t => techMap[t])
    .filter(Boolean);
}
