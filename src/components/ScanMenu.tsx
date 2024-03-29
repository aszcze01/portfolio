import { useState } from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import { Link } from "react-router-dom";

const ScanMenu = () => {

  const [bio, setBio] = useState(false);

  const handleClickBio = () => {
    // state.isObjectData = false;
    // state.isDesc = false;
    // state.isBio = true;
  }

  return (
    <div className="scanMenu">
      <span>
        <Link to="/bio">BIO</Link>
    </span>
      <span>WORK</span>
      <span>WRITE</span>
    </div>
  );
};

export default ScanMenu;
