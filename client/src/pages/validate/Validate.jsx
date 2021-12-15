import axios from "axios";
import Cookies from "universal-cookie";

import { useEffect, useState } from "react";

import Sidebar from "../../components/siderbar/Sidebar";

import "./validate.css";

export default function Validate() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("http://127.0.0.1:4000/post/show-all-posts")
      .then((res) => setPosts(res.data));
    const cookies = new Cookies();
    setUser(cookies.get("user"));
    setIsLoading(false);
  }, []);

  const cardClick = (el) => {
    if (el.target.classList.contains("open")) {
      el.target.classList.remove("open");
      el.target.classList.remove("shadow-2");
      el.target.classList.add("shadow-1");
    } else {
      el.target.classList.remove("open");
      el.target.classList.remove("shadow-2");
      el.target.classList.add("open");
      el.target.classList.add("shadow-2");
    }
  };

  const validatePost = (post) => {
    axios
      .put(`http://127.0.0.1:4000/post/validate-post/${post.id}`, {
        post: { ...post, validated_by: user.id },
        user: user,
      })
      .then((res) => {
        console.log(res);
      });
  };

  const renderCards = () => {
    return posts.map((post) => {
      if (post.validated === false) {
        return (
          <div
            className="card shadow-1"
            onClick={(el) => {
              cardClick(el);
            }}
            key={post.id}
          >
            Title: {post.title} <br />
            <div className="open-show">
              <button
                className="validateSubmit"
                onClick={() => validatePost(post)}
              >
                Validate
              </button>
            </div>
          </div>
        );
      } else {
        return <></>;
      }
    });
  };

  if (isLoading) {
    return <div className="validate">Loading...</div>;
  }

  if (user.user_type <= 1) {
    return <div className="validate">You need to be an admin</div>;
  }

  return (
    <div className="validate">
      <div className="validateWrapper">
        <div className="validateTitle">
          <span className="validateUpdateTitle">Validar Posts</span>
        </div>
        <div className="all">
          <div className="cards">{renderCards()}</div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
