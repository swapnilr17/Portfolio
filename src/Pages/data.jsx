// Import images as ES modules
import urlstImg from '../assets/images/urlst.png';
import gradientImg from '../assets/images/gradient.png';
import bankingImg from '../assets/images/banking.png';
import bookstoreImg from '../assets/images/bookstore.png';
import chatappImg from '../assets/images/chatapp.png';
import extractimgImg from '../assets/images/extractimg.png';

const postdata = [
    {
        id:1,
        image: urlstImg,
        title:"Url Shortener",
        tag:'React Js, Node Js',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        path: 'https://urlst.netlify.app/'
    },
    {
        id:2,
        image: gradientImg,
        title:"Gradient App",
        tag:'React, Redux, Node Js',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        path: 'https://gradientz.netlify.app/'
    },
    {
        id:3,
        image: bankingImg,
        title:"Banking Website",
        tag:'Mongo Db, Node Js',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        path: 'https://banking-website.herokuapp.com/'
    },
    {
        id:4,
        image: bookstoreImg,
        title:"Bookstore App",
        tag:'react, nodejs, MongoDb',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        path: 'https://mybookstore-js.herokuapp.com/'
    },
    {
        id:5,
        image: chatappImg,
        title:"Chat Application",
        tag:'react, Firebase',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        path: 'https://globalchat.netlify.app/'
    },
    {
        id:6,
        image: extractimgImg,
        title:"Text OCR",
        tag:'nodejs',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        path: 'https://extractimg.herokuapp.com/'
    }
]

export default postdata;