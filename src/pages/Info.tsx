// import Earth from "../components/Earth";
import { useSnapshot } from "valtio";
import state from "../store";
import RandomizeText from "../components/RandomizeText";
import ScanMenu from "../components/ScanMenu";
import Brain from "../models/Brain";
// import Bio from "./Bio";
// import Intro from "../components/Intro";
import Desc from "../components/old/Desc";
import { ObjectDataText } from "../datasets/PanelText";
// import { EqualHeight, EqualHeightElement } from "react-equal-height/clean";
import { motion } from "framer-motion"
import { useEffect } from "react";
import { InfoDescText } from "../datasets/DescText";

const Info = () => {
//   const snap = useSnapshot(state);
//   let { isObjectData, isPanelInfo, isEarthVisible, isLoader, isDesc, isPanelHacked, isIntro } = state;

  useEffect(() => {
    state.isIntro = false;
    state.isLoader = false;
    state.isPanelInfo = true;
    state.isObjectData = true;
    state.isEarthVisible = false;
    state.isDesc = true;
  }, [])

  const sequence = [InfoDescText, 3000]

  return (
    <div className="container">
      {/* <EqualHeight timeout={400} updateOnChange={snap.isObjectData}> */}
        {/* <EqualHeightElement name="device" placeholder={false}> */}
          <section className="device__alien">
            <div className="secondaryPanel">
              {/* {isPanelInfo && <RandomizeText words={EarthPanelText} />} */}
              <RandomizeText words={ObjectDataText} />
              <ScanMenu />
            </div>
            <div
            //   initial={isObjectData && ({ opacity: 0, scale: 0.5 })}
            //   animate={isObjectData && ({ opacity: 1, scale: 1 })}
              // transition={{
              //   duration: 3,
              //   ease: [0, 0.71, 0.2, 1.01],
              //   scale: {
              //     type: "spring",
              //     damping: 5,
              //     stiffness: 100,
              //     restDelta: 0.001
              //   }
              // }}
              className="primaryPanel"
            >
              <Brain />
              {/* {isEarthVisible && <Earth />} */}
              {/* {isBio && <Bio />} */}
            </div>
          </section>
        {/* </EqualHeightElement> */}

        {/* <EqualHeightElement name="device" placeholder={false}> */}
          <section className="device__human">
            {/* {isLoader && <Intro />} */}
            {state.isDesc && <Desc sequence={sequence} />}
          </section>
        {/* </EqualHeightElement> */}
      {/* </EqualHeight> */}
    </div>
  );
};

export default Info;
