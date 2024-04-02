import { useState } from "react";
import { Link } from "react-router-dom";
import RandomizeText from "../components/RandomizeText";

const ScanMenu = () => {

  return (
    <div className="scanMenu">
      <span>Scan results: </span>
      <span className="scanMenu__links">
        <span className="scanMenu scanMenu__link">
          <Link to="/bio">BIO</Link>
        </span>
        <span className="scanMenu scanMenu__link">WORK</span>
        <span className="scanMenu scanMenu__link">
        <Link to="/contact">CONTACT</Link>
        </span>
      </span>
    </div>
  );
};

export default ScanMenu;
