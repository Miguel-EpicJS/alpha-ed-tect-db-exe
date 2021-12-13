import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <div className="container">
      <div className="post">
        {post.image_link && (
          <a href={`/post/${post.id}`}>
            <img className="postImg" src={post.image_link} alt="" />
          </a>
        )}
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">{post.cat}</span>
          </div>
          <Link className="link" to={`/post/${post.id}`}>
            <span className="postTitle">{post.title}</span>
          </Link>
        </div>
        <p className="postDesc">{post.about}</p>
      </div>
    </div>
  );
}
