import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAIL" });
    }
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
        <button className="loginButton" type="submit" disabled={isFetching}>
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
