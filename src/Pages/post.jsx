import React ,{useState} from 'react';
import Footer from '../components/Footer';
import Posts from '../components/Post';
import Postnav from '../components/Post/nav'

const Post = () =>{
    const[isOpen,setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }
  return(
    <div>
    <Postnav/>
    <Posts/>
    <Footer/>
    </div>
  )
}

export default Post;
