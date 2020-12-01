import React ,{useState} from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Sidebar from '../components/Sidebar';
import About from '../components/About';
import Project from '../components/Projects';
import Footer from '../components/Footer';


const Main = () =>{
    const[isOpen,setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }
  return(
    <div>
    <Navbar toggle={toggle} isOpen={isOpen}/>
    <Sidebar isOpen={isOpen}/>
    <Home />
    <About />
    <Project />
    <Footer/>
    </div>
  )
}

export default Main;
