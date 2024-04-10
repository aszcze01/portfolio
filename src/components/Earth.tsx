import Globe from "react-globe.gl";
import texture from "../assets/earth-green-3.jpg";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

import { useEffect, useMemo, useRef, useState } from "react";
// import ThreeGlobe from 'three-globe'
// import points from "../datasets/points.js";
// import { BloomPass } from 'three/addons/postprocessing/BloomPass.js';
// import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
// import  {BadTVShader} from '../effects/BadTVShader.js'
// import  {StaticShader} from '../effects/StaticShader'
// import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
// @ts-ignore
import { UnrealBloomPass } from "../effects/UnrealBloomPass.js";
// @ts-ignore
import { RGBShiftShader } from "../effects/RGBShiftShader";
import { GlitchPass } from "three/addons/postprocessing/GlitchPass.js";
import { FilmPass } from "three/addons/postprocessing/FilmPass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import state from "../store";
import { useSnapshot } from "valtio";
import * as THREE from "three";
import { GetCSVData } from "../components/GetCSVData";
import { useMediaQuery } from "../hooks/useMediaQuery.js";

// extend({ Globe })

const Earth = (
  // {
  // globeImageUrl?: string;
  // waitForGlobeReady?: boolean;
  // width?: number | string;
  // height?: number | string;
  // showAtmosphere?: boolean;
  // showGlobe?: boolean;
  // atmosphereAltitude?: number;
  // atmosphereColor?: string;
  // ringsData?: any;
  // ringLat?: number;
  // ringLng?: number;
  // ringMaxRadius?: number;
  // ringPropagationSpeed?: number;
  // ringRepeatPeriod?: number;
  // ringAltitude?: number | {};
  // ringColor?: () => string;
  // pointsData?: any;
  // pointAltitude?: string | number;
  // pointColor?: string;
  // pointRadius?: number;
  // onPointClick?: () => void;
  // labelsData?: any;
  // labelColor?: () => string;
  // labelSize?: number;
  // labelLat?: number;
  // labelLng?: number;
  // labelText?: () => string;
  // labelAltitude?: number;
  // labelDotRadius?: number;
  // onLabelClick?: () => void;
// }
): JSX.Element => {
  const snap = useSnapshot(state);

  let navigate = useNavigate();

  const lat = 51.759445;
  const lng = 19.457216;

  const matches = useMediaQuery('(max-width: 767px)')

  let globeWidth = matches ? 300 : 500;
  let globeHeight = matches ? 300 : 500;

  const greenColor = "rgba(0, 255, 84, 100)";
  const blackColor = "rgba(0, 0, 0, .8)";

  const gData = [
    {
      lat: lat,
      lng: lng,
    },
  ];


  const globeRef = useRef<any>(null);

  // const [earthWidth, setEarthWidth] = useState(500);
  // const [earthHeight, setEarthHeight] = useState(500);
  // const [pointAltitude, setPointAltitude] = useState("size");
  // const [UFOsData, setUFOsData] = useState([]);
  const [globeRadius, setGlobeRadius] = useState();

  const unrealBloomPass = new UnrealBloomPass();
  const glitchPass = new GlitchPass(8);
  const filmPass = new FilmPass(0.01, false);
  const rgbShiftPass = new ShaderPass(RGBShiftShader);
  // const bloomPass = new BloomPass(8, 11, 4);
  // const outputPass = new OutputPass();
  // const badTVPass = new ShaderPass(BadTVShader);
  // const staticPass = new ShaderPass(StaticShader);

  const [earthState, setEarthState] = useState({
    ringAlt: -1,
    labelAlt: -1,
    pointAlt: 0,
  });

  useEffect(() => {
    snap.isDesc &&
      // setRingData(gData)
      setEarthState({
        ...state,
        ringAlt: 0.01,
        labelAlt: 0.01,
        pointAlt: 0.09,
      });
  }, [snap.isDesc]);

  useEffect(() => {
    unrealBloomPass.strength = 0.1;
    unrealBloomPass.radius = 0.2;
    unrealBloomPass.threshold = 0;
    if (globeRef.current) {
      setGlobeRadius(globeRef.current.getGlobeRadius());
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.2;
      globeRef.current.controls().enableZoom = matches ? true : false;
      globeRef.current.pointOfView(
        {
          lat: 51.759445,
          lng: 19.457216,
          altitude: 1.8,
        },
        5000
      );
      globeRef.current.postProcessingComposer().addPass(unrealBloomPass);
      globeRef.current.postProcessingComposer().addPass(rgbShiftPass);
      globeRef.current.postProcessingComposer().addPass(glitchPass);
      globeRef.current.postProcessingComposer().addPass(filmPass);
      const timeout = setTimeout(() => {
        globeRef.current.postProcessingComposer().removePass(glitchPass);
        globeRef.current.postProcessingComposer().removePass(rgbShiftPass);
        return () => clearTimeout(timeout);
      }, 5000);
    }
  }, []);

  const handleHover = () => {
    globeRef.current.controls().autoRotate = false;
  };

  const handleClick = () => {
    // globeRef.current.pointOfView(
    //   {
    //     lat: 51.759445,
    //     lng: 19.457216,
    //     altitude: 4
    //   }, 1000)
    // setPointAltitude("zero")
    navigate("/info");
    // state.isIntro = false;
    // state.isLoader = false;
    // state.isPanelInfo = true;
    // state.isObjectData = true;
    // state.isEarthVisible = false;
  };

  const ufoObject = useMemo(() => {
    if (!globeRadius) return undefined;

    const ufoGeometry = new THREE.DodecahedronGeometry(1.5, 0);
    const ufoMaterial = new THREE.MeshLambertMaterial({
      color: "white",
      transparent: true,
      opacity: 0.8,
    });
    return new THREE.Mesh(ufoGeometry, ufoMaterial);
  }, [globeRadius]);

  const getTooltip = (d: any) => `
      <div style="cursor: pointer; text-align: center; background-color: ${blackColor}; color: ${greenColor}; border-radius: 0.5rem; border: 1px solid green; padding: 1rem; text-transform: capitalize; font-size: .8rem;">
        <div>Probe: ${String(d.id).padStart(4, '0')}</div>
        <div>Scan data:</div>
        <div>Status: corrupted</div>
        <div>loc: <b>${d.city}</b>, ${d.country}</div>
        <div>time: ${d.datetime}</div>
      </div>
    `;

  const ufosData = GetCSVData();

  const handleObjectClick = (d: any) => {
    globeRef.current.pointOfView(
      {
        lat: d.latitude,
        lng: d.longitude,
        altitude: 1.8,
      },
      1000
    );
    // globeRef.current.getTooltip();
  };

  // const [countries, setCountries] = useState({ features: []});

  // useEffect(() => {
  //     // load data
  //     fetch('../datasets/ne_110m_admin_0_countries.geojson').then(res => res.json()).then(setCountries);

  //   }, []);

  return (
    <>
      <Globe
        ref={globeRef}
        showGlobe={true}
        backgroundColor="rgba(0,0,0,0)"
        waitForGlobeReady={false}
        globeImageUrl={texture}
        showAtmosphere={true}
        atmosphereColor={"lightgreen"}
        atmosphereAltitude={0.2}
        width={globeWidth}
        height={globeHeight}
        // onGlobeReady={() => {
        //   // setEarthWidth(globeRef.current?.width);
        //   // setEarthHeight(globeRef.current?.height);
        // }}

        // hexPolygonsData={countries.features}
        // hexPolygonResolution={3}
        // hexPolygonMargin={0.3}
        // hexPolygonUseDots={true}
        // hexPolygonColor={() => `green`}

        ringsData={gData}
        ringMaxRadius={20}
        ringPropagationSpeed={-4}
        ringRepeatPeriod={2000}
        ringAltitude={earthState.ringAlt}
        ringColor={() => "white"}

        pointsData={ufosData}
        pointLat={"latitude"}
        pointLng={"longitude"}
        pointAltitude={0.1}
        pointColor={"color"}
        pointRadius={0.1}
        // onPointClick={handleClick}

        objectsData={ufosData}
        objectLat={"latitude"}
        objectLng={"longitude"}
        objectAltitude={0.1}
        objectLabel={getTooltip}
        objectThreeObject={ufoObject}
        onObjectClick={handleObjectClick}

        labelsData={gData}
        labelColor={() => "white"}
        labelSize={0.3}
        labelText={() => " "}
        labelAltitude={earthState.labelAlt}
        labelDotRadius={2}
        onLabelClick={handleClick}
        onLabelHover={handleHover}
      />
    </>
  );
};

export default Earth;
