import "./sidebar.css";
import perfilImg from "../../assets/images/aboutUs.jpg";
import { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCat] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:4000/category/show-categories").then(res => {
      console.log(res.data);
      setCat(res.data);
    });
    
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">SOBRE NÓS</span>
        <img src={perfilImg} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          magnam ab autem ullam amet reprehenderit.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIAS</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link className="link" to={`/?cat=${c.id}`} key={c.name}>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">NOS SIGA!</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
