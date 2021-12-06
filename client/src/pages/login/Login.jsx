import axios from "axios";
import Cookies from "universal-cookie";

import { useRef } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:4000/user/login", { user: { username: userRef.current.value, password: passwordRef.current.value } }).then(res => {
      const cookies = new Cookies();

      const parseCookie = str =>
        str
          .split(';')
          .map(v => v.split('='))
          .reduce((acc, v) => {
            acc[decodeURIComponent(v[0])] = decodeURIComponent(v[1]);
            return acc;
          }, {});

      const c = parseCookie(res.data);

      if (res.status === 200) {
        cookies.set("user", c.user, { path: '/', maxAge: 311040});        
      }else{
        alert("Login Fail");
      }

      console.log(c);
      console.log(res);

      history.push("/login");
      history.replace("/");
      
      window.location.reload();
    });
  };

  return (
    <div className="login">
      <span className="loginTitle">Entrar</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Nome de Usuário</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Coloque o seu usuário"
          ref={userRef}
        />
        <label>Senha</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Coloque a sua senha"
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" >
          Entrar
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Registrar
        </Link>
      </button>
    </div>
  );
}
