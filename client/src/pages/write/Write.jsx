import "./write.css";
import axios from "axios";
import Cookies from "universal-cookie";

import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function Write() {
  const history = useHistory();

  const [isLoading, setLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [about, setAbout] = useState("");

  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get("http://127.0.0.1:4000/category/show-categories").then((res) => {
      setCategories(res.data);
      setLoading(false);
      console.log(categories)
    });

    const cookies = new Cookies();
    setUser(cookies.get("user"));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      post: {
        title: title,
        subtitle: subtitle,
        content: desc,
        about: about,
        image_link: image,
        category: 1,
        posted_by: 1
      },
      user: {
        ...user
      }
    };

    axios.post("http://127.0.0.1:4000/post/add-post", data).then((res) => {
      console.log(res);
    });

    history.push("/login");
    history.replace("/");
    
    window.location.reload();
  }

  if (isLoading) {
    return <div className="write">Loading...</div>;
  }

  return (
    <div className="write">
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">

          <input
            type="text"
            placeholder="Título"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="Subtítulo"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setSubtitle(e.target.value)}
          />
        </div>

        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="Link da Imagem"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div className="writeFormGroup">
          <textarea
            placeholder="Conte um resumo..."
            type="text"
            className="writeInput writeText"
            onChange={(e) => setAbout(e.target.value)}>
          </textarea>
        </div>

        <div className="writeFormGroup">
          <textarea
            placeholder="Conte sua história..."
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}>

          </textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publicar
        </button>
      </form>
    </div>
  );
}
