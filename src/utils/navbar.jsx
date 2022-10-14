import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Icon from "./Icon";

export default function NavBar({ onLogoClick, onProfileClick }) {
  return (
    <header className="App-header">
      <nav className="navbar navbar-light bg-light px-3 py-1">
        <span role="button" className="ml-1 navbar-brand" onClick={onLogoClick}>
          <Icon name={ElectricBoltIcon} />
          three pics
        </span>
        <form
          role="button"
          className="form-inline nav-form pr-1"
          onClick={onProfileClick}
        >
          <Icon name={AccountCircleIcon} />
        </form>
      </nav>
    </header>
  );
}
