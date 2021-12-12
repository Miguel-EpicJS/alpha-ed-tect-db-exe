import Cookies from "universal-cookie";
import axios from "axios";

import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Sidebar from "../../components/siderbar/Sidebar";

import "./settings.css";
import perfilImg from "../../assets/images/aboutUs.jpg";

export default function Settings() {
  const history = useHistory();
  
  
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [user, setUser] = useState({});

  useEffect(() => {
    const cookies = new Cookies();
    setUser(cookies.get("user"));

    setIsLoading(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      info: {
        username: username,
        password: password,
        email: email,
        name: name
      },
      user: {
        ...user
      }
    };

    axios.put(`http://127.0.0.1:4000/user/update-user/${user.id}`, data).then((res) => {
      console.log(res);
    }).catch(function (error) {
      setSuccess("error");
      console.log(error);
    });
    setSuccess("ok");
  }

  if (isLoading) {
    return <div className="write">Loading...</div>;
  }

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Atualize sua conta</span>
          <span className="settingsDeleteTitle">Apagar conta</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Foto do perfil</label>
          <div className="settingsPP">
            <img
              src={perfilImg}
              alt=""
            />
          </div>
          <label>Nome Completo</label>
          <input
            type="text"
            placeholder={user.name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Nome de usuário</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>E-mail</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Senha</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit" type="submit">
            Atualizar
          </button>
          {success === "ok" && (
            <span
              style={{
                color: "green",
                textAlign: "center",
                marginTop: "20px",
              }}>
              Atualizado com sucesso!
            </span>
          )}
          {success === "error" && (
            <span
              style={{
                color: "red",
                textAlign: "center",
                marginTop: "20px",
              }}>
              Ouve um erro!
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
