import Post from "../post/Post";
import "./posts.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Posts() {

  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    axios.get("http://127.0.0.1:4000/post/show-posts").then(res => setPosts(res.data));
  }, [])

  return (
    <div className="posts">
        {posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  );
}
