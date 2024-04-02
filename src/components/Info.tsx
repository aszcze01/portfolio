import Earth from "../components/Earth";
import { useSnapshot } from "valtio";
import state from "../store";
import RandomizeText from "../components/RandomizeText";
import ScanMenu from "../components/ScanMenu";
import Brain3 from "../models/Brain3";
import Bio from "../pages/Bio";
// import Intro from "../components/Intro";
// import Desc from "../components/Desc";
import { EarthPanelText, ObjectDataText } from "../datasets/PanelText";
import Desc from "./Desc";

const Info = () => {
  const snap = useSnapshot(state);

  // const secondaryPanel = document.querySelector(".secondaryPanel");
  const primaryPanel = document.querySelector(".primaryPanel");
//   snap.isDesc && primaryPanel?.classList.add("primaryPanel__wide");
//   !snap.isEarthVisible && primaryPanel?.classList.remove("primaryPanel__wide");
//   snap.isObjectData && primaryPanel?.classList.add("primaryPanel__narrow");

  return (
    <div className="container">
      <section className="device__alien">
        <div className="secondaryPanel">
          <RandomizeText words={ObjectDataText} />
          <ScanMenu />
        </div>
        <div className="primaryPanel">
          <Brain3 />
          {snap.isBio && <Bio />}
        </div>
      </section>
      <section className="device__human">
        <Desc />
      </section>
    </div>
  );
};

export default Info;
