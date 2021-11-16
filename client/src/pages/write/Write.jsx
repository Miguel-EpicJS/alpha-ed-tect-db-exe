import "./write.css";
import battlefield from "../../assets/images/post-battlefiled.jpg";


export default function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src={battlefield}
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Título"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Conte sua história..."
            type="text"
            className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit">Publicar</button>
      </form>
    </div>
  );
}
