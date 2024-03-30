import { useState } from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import { Link } from "react-router-dom";
import RandomizeText from "../components/RandomizeText";

const ScanMenu = () => {
  const [bio, setBio] = useState(false);

  const handleClickBio = () => {
    // state.isObjectData = false;
    // state.isDesc = false;
    // state.isBio = true;
  };

  return (
    <div className="scanMenu">
      <span>Scan results: </span>
      <span className="scanMenu__links">
        <span className="scanMenu scanMenu__link">
          <Link to="/bio">BIO</Link>
        </span>
        <span className="scanMenu scanMenu__link">WORK</span>
        <span className="scanMenu scanMenu__link">CONTACT</span>
      </span>
    </div>
  );
};

export default ScanMenu;
