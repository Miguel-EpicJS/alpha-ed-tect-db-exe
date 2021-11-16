import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Registrar</span>
      <form className="registerForm">
        <label>Nome de usuário</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Coloque o seu usuário"
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Coloque o seu email"
        />
        <label>Senha</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Coloque a sua senha"
        />
        <button className="registerButton">Registrar</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">Entrar</Link>
      </button>
    </div>
  );
}
