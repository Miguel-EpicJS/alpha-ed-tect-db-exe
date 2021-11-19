import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
const publicFolder = "http://localhost:5000/images/";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

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
          <li className="top-list-item" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="top-right">
        {user ? (
          <Link to="/settings">
            <img
              className="top-right-img"
              src={publicFolder + user.profilePic}
              alt=""
            />
          </Link>
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
