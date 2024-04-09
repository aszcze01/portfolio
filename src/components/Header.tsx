import { Link } from "react-router-dom";
import state from "../store";

const Header = () => {
  const handleClick = () => {
    state.isIntro = false;
    state.isLoader = false;
    state.isObjectData = false;
    state.isEarthVisible = true;
    state.isPanelHacked = true;
    state.isDesc = true;
    state.isPanelInfo = true;
    state.isContactLinkHovered = false;
    state.isWorkLinkHovered = false;
    state.isBioLinkHovered = false;
  };

  return (
    <>
      <h1 className="header__title" onClick={handleClick}>
        <Link to="/">ANDRZEJ SZCZEPANIK - HOME BASE</Link>
      </h1>
      <nav className="headerLinks">
        <Link to="/info">INFO</Link>
        <Link to="/bio">BIO</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>
    </>
  );
};

export default Header;
