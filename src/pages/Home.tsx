import Earth from "../components/Earth";
import { useSnapshot } from "valtio";
import state from "../store";
import RandomizeText from "../components/RandomizeText";
import ScanMenu from "../components/ScanMenu";
import Brain3 from "../models/Brain3";
import Bio from "../components/Bio";
import Intro from "../components/Intro";
import Desc from "../components/Desc";
import { EarthPanelText, ObjectDataText } from "../datasets/PanelText";
import { EqualHeight, EqualHeightElement } from "react-equal-height/clean";

const Home = () => {
  const snap = useSnapshot(state);

  // const secondaryPanel = document.querySelector(".secondaryPanel");
//   const primaryPanel = document.querySelector(".primaryPanel");
  //   snap.isDesc && primaryPanel?.classList.add("primaryPanel__wide");
  //   !snap.isEarthVisible && primaryPanel?.classList.remove("primaryPanel__wide");
//   snap.isObjectData && primaryPanel?.classList.add("primaryPanel__narrow");

  return (
    <div className="container">
      {/* <EqualHeight timeout={400} updateOnChange={snap.isObjectData}> */}
        {/* <EqualHeightElement name="device" placeholder={false}> */}
          <section className="device__alien">
            <div className="secondaryPanel">
              {snap.isPanelInfo && <RandomizeText words={EarthPanelText} />}
              {snap.isObjectData && <RandomizeText words={ObjectDataText} />}
              {snap.isObjectData && <ScanMenu />}
            </div>
            <div className="primaryPanel">
              {snap.isObjectData && <Brain3 />}
              {snap.isEarthVisible && <Earth />}
              {/* {snap.isBio && <Bio />} */}
            </div>
          </section>
        {/* </EqualHeightElement> */}

        {/* <EqualHeightElement name="device" placeholder={false}> */}
          <section className="device__human">
            {snap.isLoader && <Intro />}
            {snap.isDesc && <Desc />}
          </section>
        {/* </EqualHeightElement> */}
      {/* </EqualHeight> */}
    </div>
  );
};

export default Home;
