import "./topbar.css";
import userImg from "../../assets/images/default-user-icon-13.jpg"

import { Link } from "react-router-dom";

import Cookies from "universal-cookie";
import { useEffect, useState } from "react";


export default function TopBar() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const cookies = new Cookies();
    setUser(cookies.get("user"));
  }, []);

  const handleLogout = () => {
    const cookies = new Cookies();
    cookies.remove("user", {path: "/"});

    window.location.reload();
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
            <a className="link" href="/">
              INÍCIO
            </a>
          </li>
          <li className="top-list-item">
            <a className="link" href="/write">
              POSTAR
            </a>
          </li>
          <li className="top-list-item">
            <a className="link" href="/validate">
              {user && user.user_type > 1 && "VALIDATE"}
            </a>
          </li>
          <li className="top-list-item" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="top-right">
        {user ? (
          <a href="/settings">
            <img
              className="top-right-img"
              src={userImg}
              alt=""
            />
          </a>
        ) : (
          <ul className="top-list">
            <li className="top-list-item">
              <a className="link" href="/login">
                LOGIN
              </a>
            </li>
            <li className="top-list-item">
              <a className="link" href="/register">
                REGISTER
              </a>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
