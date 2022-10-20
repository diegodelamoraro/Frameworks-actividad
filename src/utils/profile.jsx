import { useContext } from "react";
import authContext from "../authContext";

export default function ProfileComponent({ avatar, username, bio }) {
  const { logOut } = useContext(authContext);
  return (
    <div className="section-profile text-center my-4">
      <img
        src={avatar}
        className="bd-placeholder-img rounded-circle"
        style={{ width: "150px", height: "150px" }}
      />
      <h6 className="card-title my-3">{username}</h6>
      <p className="card-text px-4">{bio}</p>
      <a
        href="#"
        className="btn btn-primary btn-lg active"
        role="button"
        aria-pressed="true"
        onClick={logOut}
      >
        Log Out
      </a>
    </div>
  );
}
