import axios from "axios";
import Cookies from "universal-cookie";

import { useEffect, useState } from "react";

import "./validate.css";

export default function Validate() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const [show, setShow] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:4000/post/show-all-posts")
      .then((res) => setPosts(res.data));
    actions();
  }, []);

  const validatePost = (post) => {
    axios
      .put(`http://127.0.0.1:4000/post/validate-post/${post.id}`, {
        post: { ...post, validated_by: user.id },
        user: user,
      })
      .then((res) => {
        setShow(false);
        window.location.reload();
      });
  };

  /*  const deletePost = (post) => {
    axios.delete(`http://127.0.0.1:4000/post/delete-post/${post.id}`, {
      post: { ...post, deleted: true }
    });
    setPosts ([]);
    window.location.reload();
  }; */

  function actions() {
    const cookies = new Cookies();
    setUser(cookies.get("user"));
    setIsLoading(false);
  }

  if (isLoading) {
    return <div className="validate">Carregando...</div>;
  }

  return (
    <div className="validate">
      <div className="validateWrapper">
        <div className="validateTitle">
          <span className="validateUpdateTitle">Validar Posts</span>
        </div>
        <div className="all">
          <div className="cards">
            {posts.map((post) => {
              if (post.validated === false) {
                return (
                  <div className="container-validate">
                    <img src={post.image_link} alt={post.title} />
                    <h1>Título: {post.title}</h1>
                    <p>Conteúdo: {post.content}</p>
                    {show ? (
                      <button onClick={() => validatePost(post)}>
                        Validar
                      </button>
                    ) : (
                      <></>
                    )}
                    {/*                     <button
                      key={post.id}
                      onClick={() => deletePost(post)}
                      style={{ backgroundColor: "red" }}
                    >
                      Deletar
                    </button>
 */}{" "}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
