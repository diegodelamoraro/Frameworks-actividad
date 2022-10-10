import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import Icon from "./Icon";
import { useState } from "react";

export default function Post({ createdAt, autor, text, comments, image }) {
  const [like, setLike] = useState(0);

  const minutes = new Date().getMinutes() - createdAt.getMinutes();

  function setLikes() {
    setLike(like + 1);
  }
  return (
    <div className="card mb-3">
      <img className="card-img-top" src={image} alt="Snorkeling" />
      <div className="card-body">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="text-muted">{minutes} min ago</div>
          <div>
            <button type="button" className="btn btn-danger" onClick={setLikes}>
              <small>
                <Icon
                  name={FavoriteOutlinedIcon}
                  styles={{ width: ".675em" }}
                />
                &nbsp; {like}
              </small>
            </button>
          </div>
        </div>
        <h6 className="card-title">{autor}</h6>
        <p className="card-text">{text}</p>
        <p className="card-text">
          <small className="text-muted">
            <Icon name={ModeCommentOutlinedIcon} />
            &nbsp; Comments ({comments})
          </small>
        </p>
      </div>
    </div>
  );
}
