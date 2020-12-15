import React ,{useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Post = () =>{
    const[isOpen,setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }
  return(
    <div>
    <Navbar toggle={toggle} isOpen={isOpen}/>
    <Sidebar isOpen={isOpen}/>
    <Footer/>
    </div>
  )
}

export default Post;
