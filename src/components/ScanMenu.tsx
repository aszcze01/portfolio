import { Link } from "react-router-dom";
import RandomizeText from "../components/RandomizeText";
import state from "../store";

const ScanMenu = () => {
  return (
    <div className="scanMenu">
      <span>Scan results: </span>
      <span className="scanMenu__links">
        <span
          className="scanMenu scanMenu__link"
          onMouseOver={() => (state.isBioLinkHovered = true)}
          onMouseOut={() => (state.isBioLinkHovered = false)}
        >
          <Link to="/bio">BIO</Link>
        </span>
        
        <span
          className="scanMenu scanMenu__link"
          onMouseOver={() => (state.isWorkLinkHovered = true)}
          onMouseOut={() => (state.isWorkLinkHovered = false)}
        >
          WORK
        </span>

        <span
          className="scanMenu scanMenu__link"
          onMouseOver={() => (state.isContactLinkHovered = true)}
          onMouseOut={() => (state.isContactLinkHovered = false)}
        >
          <Link to="/contact">CONTACT</Link>
        </span>
      </span>
    </div>
  );
};

export default ScanMenu;
