import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Entrar</span>
      <form className="loginForm">
        <label>E-mail</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Coloque o seu email"
        />
        <label>Senha</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Coloque a sua senha"
        />
        <button className="loginButton">Entrar</button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">Registrar</Link>
      </button>
    </div>
  );
}
