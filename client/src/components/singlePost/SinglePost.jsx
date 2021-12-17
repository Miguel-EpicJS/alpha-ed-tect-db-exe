import axios from "axios";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

import "./singlepost.css";

export default function SinglePost() {
  
  const { postId } = useParams();

  const [post, setPost] = useState({});
  
  useEffect(() => {
    axios.get(`http://127.0.0.1:4000/post/show-post/${postId}`).then(res => setPost(res.data));
  },[postId]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
          <img
            src={post.image_link}
            alt=""
            className="singlePostImg"
          />
    
          <h1 className="singlePostTitle">
            {post.title}
          </h1>
        <div className="singlePostInfo">
          <div className="singlePostAuthor">
            <Link className="link" to={`/user/${post.username}`}>
              Autor: <b>{post.username}</b>
            </Link>
            | 
            <Link className="link" to={`/?user=${post.username}`}>
              Category: <b>{post.cat}</b>
            </Link>
          </div>
        </div>
        <div className="singlePostText">
          {post.content}
        </div>
      </div> 
    </div>
  );
}
