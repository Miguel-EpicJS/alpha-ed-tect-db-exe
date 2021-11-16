import "./post.css";
import battlefield from "../../assets/images/post-battlefiled.jpg";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src={battlefield}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">#AÇÃO</span>
          <span className="postCat">#TIRO</span>
        </div>
        <span className="postTitle">Lançamento Battlefield 2042</span>
        <span className="postDate">1 hora atrás</span>
      </div>
      <p className="postDesc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
        cupiditate consequatur quo consequuntur fuga autem alias. Tempora
        asperiores perferendis eveniet atque, corrupti numquam commodi beatae
        dolores minima at iusto non?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
        cupiditate consequatur quo consequuntur fuga autem alias. Tempora
        asperiores perferendis eveniet atque, corrupti numquam commodi beatae
        dolores minima at iusto non?
      </p>
    </div>
  );
}
