import { Link } from "react-router-dom";
import { useSnapshot } from "valtio";
import state from "../store";
// import { useEffect } from "react";

const Header = () => {

  const snap = useSnapshot(state);

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
        <Link to="/">ANDRZEJ SZCZEPANIK -<br className="mobileOnly" /> HOME BASE</Link>
      </h1>
      <nav className="headerLinks">
        <Link to="/info" className={snap.isInfoPage ? "headerLinks__active" : "headerLinks__inactive"}>INFO</Link>
        <Link to="/bio" className={snap.isBioPage ? "headerLinks__active" : "headerLinks__inactive"}>BIO</Link>
        <Link to="/contact" className={snap.isContactPage ? "headerLinks__active" : "headerLinks__inactive"}>CONTACT</Link>
      </nav>
    </>
  );
};

export default Header;
