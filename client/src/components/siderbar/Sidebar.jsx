import "./sidebar.css";
import perfilImg from "../../assets/images/aboutUs.jpg";
import { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCat] = useState([]);
  const [catCount, setCatCount] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://127.0.0.1:4000/category/show-categories").then((res) => {
      setCat(res.data);
      
    });
    
    axios.get("http://127.0.0.1:4000/category/count-categories").then((res) => {
      setCatCount(res.data);
      setLoading(false);  
    });

  }, []);

  if (loading) {
    return <div><p>Loading...</p></div>
  }

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">SOBRE NÓS</span>
        <img src={perfilImg} alt="" />
        <p>
          Carlos Moreira e Miguel Junqueira são aspirantes do projeto AlphaEdTech e apresentam esse blog com o intuito de aprofundar seus conhecimentos em banco de dados, front-end e back-end.   
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIAS({catCount[0].catcount})</span>
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
