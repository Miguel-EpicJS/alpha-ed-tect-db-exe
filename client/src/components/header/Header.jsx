import "./header.css";
import backgroundHome from "../../assets/images/background-img.png"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTittleSm">Games & Notícias</span>
        <span className="headerTittleLg">NooBest</span>
      </div>
      <img
        className="headerImg"
        src={backgroundHome}
        alt=""
      />
    </div>
  );
}
