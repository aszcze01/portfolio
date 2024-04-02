// import Globe from "./Globe";
import Earth3 from "../Earth.js";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import PostProcessingEffects from "../Effects.js";
import RandomizeText from "../RandomizeText.js";
import texture from '../assets/earth-green-3.jpg'
import points from '../../datasets/points.js'
import { useRef } from "react";

/**
 * Render the 3D Earth component.
 * @param {JSX.IntrinsicElements['div']} props The props to pass to the containing div.
 * @returns {JSX.Element} The JSX for the Earth component.
 */
export const Earth = (): JSX.Element => {

  const lat = 51.759445
  const lng = 19.457216

  const gData = [{
    lat: lat,
    lng: lng,
  }]

  return (
    <>
      
      {/* <Canvas camera={{ position: [50, 50, 600], fov: 50 }}> */}
        {/* <ambientLight intensity={2} /> */}
        {/* <pointLight intensity={1} /> */}
        {/* <OrbitControls autoRotate enableZoom={false} /> */}

        {/* <PostProcessingEffects /> */}
        {/* </Canvas> */}

        {/* <mesh scale={0.5}> */}
          <Earth3
            showGlobe={true}
            waitForGlobeReady={false}
            globeImageUrl={texture}
            showAtmosphere={true}
            atmosphereColor={'lightgreen'}
            atmosphereAltitude={0.3}
            width={500}
            height={500}

            ringsData={gData}
            // ringLat={51.759445}
            // ringLng={19.457216}
            ringMaxRadius={20}
            ringPropagationSpeed={-4}
            ringRepeatPeriod={2000}
            ringAltitude={0.03}
            ringColor={() => 'white'}

            pointsData={points}
            pointAltitude={'size'}
            pointColor={'color'}
            pointRadius={.3}
            onPointClick={() => console.log('click')}

            labelsData={gData}
            // labelLat={lat}
            // labelLng={lng}
            labelColor={() => 'white'}
            labelSize={.3}
            labelText={() => ' '}
            labelAltitude={0.05}
            labelDotRadius={2}
            onLabelClick={() => console.log('click')}
          />
        {/* </mesh> */}
    </>
  )}
