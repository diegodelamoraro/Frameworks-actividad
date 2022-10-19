import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import Icon from "./Icon";
import { useState } from "react";
import { updateLikes } from "../service/data-service";
import { calcDate } from "./functions";
//createdAt, autor, text, comments, image
export default function Post({
  text,
  author,
  image,
  createdAt,
  updatedAt,
  id,
  comments,
}) {
  const [like, setLike] = useState(0);

  const minutes = calcDate(new Date(), createdAt).result;
  function setLikes(id) {
    setLike(like + 1);
    updateLikes(id).then((data) => console.log(data));
  }
  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div className="card mb-3">
        <img className="card-img-top" src={image} alt="Snorkeling" />
        <div className="card-body">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="text-muted small">{minutes} ago</div>
            <div>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => setLikes(id)}
              >
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
          <h6 className="card-title">@{author?.username}</h6>
          <p className="card-text">{text}</p>
          <p className="card-text">
            <small className="text-muted">
              <Icon name={ModeCommentOutlinedIcon} />
              &nbsp; Comments ({comments.length})
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}
