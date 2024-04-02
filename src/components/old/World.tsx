import { useState, useEffect, useRef } from 'react'
import Globe from "react-globe.gl";
// import earth from "./assets/water_8k.png";
import * as THREE from 'three'
import * as topojson from 'topojson-client';


interface Props {
  className: string,
}


const polygonsMaterial = new THREE.MeshLambertMaterial({ color: 'green', side: THREE.DoubleSide });
const World: React.FC<Props> = () => {

  const globeEl = useRef<Mesh>(null!);

  const [landPolygons, setLandPolygons] = useState<any[]>([]);

  const ROTATION_SPEED  = 10;

  useEffect(() => {
    fetch('//unpkg.com/world-atlas/countries-110m.json').then(res => res.json())
      .then(landTopo => {
        setLandPolygons(topojson.feature(landTopo, landTopo.objects.land).features);
      });
  }, []);

  useEffect(() => {
    if (globeEl.current && window) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().enableZoom = false;
      globeEl.current.controls().enablePointerInteraction = true;

      const MAP_CENTER = {
        lat: 51.9189046,
        lng: 19.1343786,
        altitude: 2
      };

      globeEl.current.pointOfView(MAP_CENTER, ROTATION_SPEED);
      // globeEl.current.postProcessingComposer(new EffectComposer());
    }
  }, []);



  // const N = 10;
  // const points = [...Array(N).keys()].map(() => ({
  //   lat: (Math.random() - 0.5) * 180,
  //   lng: (Math.random() - 0.5) * 360,
  //   size: Math.random() / 3,
  //   color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
  // }));

  const corruptedColor = 'rgba(200, 0, 0, 100)';
  const amberColor = 'rgba(255, 183, 0, 100)';
  const greenColor = 'rgba(0, 255, 84, 100)';

  const points = [
    {
      lat: 51.759445,
      lng: 19.457216,
      size: .3,
      color: greenColor
    },
    {
      lat: 51.509865,
      lng: -0.118092,
      size: .15,
      color: amberColor,
      text: 'corrupted data'
    },
    {
      lat: 55.751244,
      lng: 37.618423,
      size: .2,
      color: amberColor
    },
    {
      lat: 38.889805,
      lng: -77.009056,
      size: .14,
      color: amberColor
    },
    {
      lat: 39.916668,
      lng: 116.383331,
      size: .2,
      color: amberColor
    },
    {
      lat: 61.217381,
      lng: -149.863129,
      size: .15,
      color: amberColor
    },
    {
      lat: 12.63917,
      lng: -8.00278,
      size: .15,
      color: amberColor
    },
    {
      lat: -25.731340,
      lng: 28.218370,
      size: .15,
      color: amberColor
    },
    {
      lat: 28.644800,
      lng: 77.216721,
      size: .15,
      color: amberColor
    },
    {
      lat:  -37.840935,
      lng: 144.946457,
      size: .10,
      color: amberColor
    },
    {
      lat:  7.207573,
      lng: 125.395874,
      size: .2,
      color: amberColor
    },
    {
      lat:  21.315603,
      lng: -157.858093,
      size: .15,
      color: amberColor
    },
    {
      lat:  -34.603722,
      lng: -58.381592,
      size: .10,
      color: amberColor
    },
    {
      lat: 4.624335,
      lng: -74.063644,
      size: .25,
      color: amberColor
    }
  ];

  const gData = [{
    lat: 51.759445,
    lng: 19.457216,
    maxR: Math.random() * 20 + 3,
    propagationSpeed: (Math.random() - 0.5) * 20 + 1,
    repeatPeriod: Math.random() * 2000 + 200,
  }]

  // const colorInterpolator = `rgba(255,100,50,10)`;

  return <Globe
    ref={globeEl}
    width={500}
    height={500}
    backgroundColor="rgba(0,0,0,0)"
    showGlobe={true}
    showAtmosphere={true}
    atmosphereColor='green'
    ringsData={gData}
    ringColor={() => greenColor}
    ringMaxRadius={7}
    ringPropagationSpeed={-3}
    ringRepeatPeriod={1000}
    ringAltitude={0.05}
    polygonsData={landPolygons}
    polygonCapMaterial={polygonsMaterial}
    polygonSideColor={() => 'rgba(0, 0, 0, 0)'}
    pointsData={points}
    pointAltitude="size"
    pointColor="color"
    pointRadius={.2}
  />;
};

export default World  