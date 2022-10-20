import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Icon from "./Icon";
import { Link } from "react-router-dom";
import { useContext } from "react";
import authContext from "../authContext";

export default function NavBar() {
  const { currentUser } = useContext(authContext);
  return (
    <header className="App-header">
      <nav className="navbar navbar-light bg-light px-3 py-1">
        <Link
          role="button"
          className="ml-1 navbar-brand"
          to={`${currentUser ? "/" : "#"}`}
        >
          <Icon name={ElectricBoltIcon} />
          three pics
        </Link>
        {currentUser ? (
          <Link
            role="button"
            style={{ textDecoration: "none", color: "black" }}
            className="form-inline nav-form pr-1"
            to="/profile"
          >
            <span style={{ fontSize: "15px" }} className="text-muted">
              Hi {currentUser.username}! &nbsp;
            </span>
            <Icon name={AccountCircleIcon} />
          </Link>
        ) : null}
      </nav>
    </header>
  );
}
