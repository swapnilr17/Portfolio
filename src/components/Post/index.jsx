import React from 'react';
import './post.scss';
import { useParams} from "react-router";
import postdata from '../../Pages/data';

const Posts = () =>{
    let { post } = useParams();
    let data = postdata.filter(postd => postd.path == post)
    return (
        <div className="post">
            <div className="post-container">
            {data.map((dat)=>(
                <div className="post-data">
                <div className="post-title">{dat.title}</div>
                <div className="post-image"><img src={dat.image}/></div>
                <div className="post-description">{dat.description}</div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Posts;
