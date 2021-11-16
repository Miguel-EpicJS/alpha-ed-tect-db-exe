import "./topbar.css";
import { Link } from "react-router-dom";
import perfilImg from "../../assets/images/perfil-img.png";

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="top-left">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">
            <Link className="link" to="/">
              INÍCIO
            </Link>
          </li>
          <li className="top-list-item">
            <Link className="link" to="/">
              SOBRE
            </Link>
          </li>
          <li className="top-list-item">
            <Link className="link" to="/">
              CONTATO
            </Link>
          </li>
          <li className="top-list-item">
            <Link className="link" to="/write">
              POSTAR
            </Link>
          </li>
          <li className="top-list-item">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="top-right">
        {user ? (
          <img
            className="top-right-img"
            src={perfilImg}
            alt=""
          />
        ) : (
          <ul className="top-list">
            <li className="top-list-item">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="top-list-item">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
