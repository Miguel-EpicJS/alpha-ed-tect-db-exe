import "./sidebar.css";
import perfilImg from "../../assets/images/perfil-img.png";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">SOBRE NÓS</span>
        <img
          src= {perfilImg}
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          magnam ab autem ullam amet reprehenderit.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIAS</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">RPG</li>
          <li className="sidebarListItem">AÇÃO</li>
          <li className="sidebarListItem">TIRO</li>
          <li className="sidebarListItem">ESPORTE</li>
          <li className="sidebarListItem">SIMULAÇÃO</li>
          <li className="sidebarListItem">MMOG</li>
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
