import Sidebar from "../../components/siderbar/Sidebar";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Atualize sua conta</span>
          <span className="settingsDeleteTitle">Apagar conta</span>
        </div>
        <form className="settingsForm">
          <label>Foto do perfil</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Nome de usuário</label>
          <input type="text" placeholder="Carlos Augusto" />
          <label>E-mail</label>
          <input type="email" placeholder="augusto@gmail.com" />
          <label>Senha</label>
          <input type="password" />
          <button className="settingsSubmit">Atualizar</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
