import axios from "axios";
import Cookies from "universal-cookie";

import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    axios.post("http://127.0.0.1:4000/user/signup", { info: { username: username, password: password, email: email, name: name} }).then(res => {
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

      cookies.set("user", c.user, { path: '/', maxAge: 311040});

      console.log(c);
      console.log(res);
    }).catch(err => console.log(err));

  };

  return (
    <div className="register">
      <span className="registerTitle">Registrar</span>
      <form className="registerForm" onSubmit={handleSubmit}>

        <label>Nome completo</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Coloque o seu nome"
          onChange={(e) => setName(e.target.value)}
        />

        <label>Nome de usuário</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Coloque o seu usuário"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Coloque o seu email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Senha</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Coloque a sua senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Registrar
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Entrar
        </Link>
      </button>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Informação incorreta!
        </span>
      )}
    </div>
  );
}
