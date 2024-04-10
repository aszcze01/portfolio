import Earth from "../components/Earth";
import { useSnapshot } from "valtio";
import state from "../store";
import RandomizeText from "../components/RandomizeText";
import Intro from "../components/Intro";
import Desc from "../components/Desc";
import { EarthPanelText } from "../datasets/PanelText";
import { EarthDescText } from "../datasets/DescText";
// import { Helmet } from "react-helmet";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect } from "react";
// import { EqualHeight, EqualHeightElement } from "react-equal-height/clean";
// import { motion } from "framer-motion"

const Home = () => {
  const snap = useSnapshot(state);
  const { isPanelInfo, isEarthVisible, isLoader, isDesc, isInfoPage, isBioPage, isContactPage } = snap;

  const sequence = [EarthDescText, 3000];

  useEffect(() => {
    state.isInfoPage = false;
    state.isBioPage = false;
    state.isContactPage = false;
  }, [])

  return (
    <HelmetProvider>
      <Helmet>
        <title>Andrzej Szczepanik | Home Base</title>
      </Helmet>
      <div className="container">
        {/* <EqualHeight timeout={400} updateOnChange={snap.isObjectData}> */}
        {/* <EqualHeightElement name="device" placeholder={false}> */}
        <section className="device__alien">
          <div className="secondaryPanel">
            {isPanelInfo && <RandomizeText words={EarthPanelText} />}
          </div>
          <div
            // initial={isObjectData && ({ opacity: 0, scale: 0.5 })}
            // animate={isObjectData && ({ opacity: 1, scale: 1 })}
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
            {isEarthVisible && <Earth />}
          </div>
        </section>
        {/* </EqualHeightElement> */}

        {/* <EqualHeightElement name="device" placeholder={false}> */}
        <section className="device__human">
          {isLoader && <Intro />}
          {isDesc && <Desc sequence={sequence} />}
        </section>
        {/* </EqualHeightElement> */}
        {/* </EqualHeight> */}
      </div>
    </HelmetProvider>
  );
};

export default Home;
