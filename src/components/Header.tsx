import { Link } from "react-router-dom";
import state from "../store";

const Header = () => {
  const handleClick = () => {
    state.isIntro = false;
    state.isObjectData = false;
    state.isEarthVisible = true;
    state.isPanelHacked = true;
    state.isDesc = true;
    state.isPanelInfo = true;
  };

  return (
    <>
      <h1 className="header__title" onClick={handleClick}>
        <Link to="/">ANDRZEJ SZCZEPANIK - MIND SCAN</Link>
      </h1>
      <nav className="headerLinks">
        <Link to="/bio">BIO</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>
    </>
  );
};

export default Header;
