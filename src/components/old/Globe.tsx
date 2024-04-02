import { useRef, useLayoutEffect, useState } from 'react'
import { extend } from '@react-three/fiber'
import ThreeGlobe from 'three-globe'
import texture from '../assets/earth-green-3.jpg'
import * as topojson from 'topojson-client'
import * as THREE from 'three'
import points from '../../datasets/points.js'


extend({ ThreeGlobe })

declare global {
  namespace JSX {
    interface IntrinsicElements {
      threeGlobe: Object3DNode<ThreeGlobe, typeof ThreeGlobe>;
    }
  }
}

const Globe = (props: any) => {
  // This reference will give us direct access to the ThreeGlobe class
  // const polygonsMaterial = new THREE.MeshLambertMaterial({ color: 'green', side: THREE.DoubleSide })

  const globeRef = useRef<any>();

  // const [landPolygons, setLandPolygons] = useState<any[]>([])

  // useLayoutEffect(() => {
  //   fetch('//unpkg.com/world-atlas/countries-110m.json').then(res => res.json())
  //     .then(landTopo => {
  //       setLandPolygons(topojson.feature(landTopo, landTopo.objects.land).features)
  //     })
  // }, [])

  const lat = 51.759445
  const lng = 19.457216

  const gData = [{
    lat: lat,
    lng: lng,
    size: 5,
    color: 'red'
    // maxR: Math.random() * 20 + 3,
    // propagationSpeed: (Math.random() - 0.5) * 20 + 1,
    // repeatPeriod: Math.random() * 2000 + 200,
  }]

  // const markers = [{
  //   lat: lat,
  //   lng: lng,
  //   size: 7,
  //   color: 'red'
  // }]

  const N = 50;
    const gData2 = [...Array(N).keys()].map(() => ({
      lat: (Math.random() - 0.5) * 180,
      lng: (Math.random() - 0.5) * 360,
      size: Math.random() * 3,
      color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)],
      onClick: () => alert('clicked')
    }));

  // An effect that runs after three.js elements are created but before render
  useLayoutEffect(() => {
    // Configure the globe
    // globeRef.current.globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
    globeRef.current.globeImageUrl(texture)
    globeRef.current.showGlobe(true)
    globeRef.current.showAtmosphere(false)
    // globeRef.current.atmosphereColor('green')

    // globeRef.current.htmlElementsData(markers)
    // globeRef.current.htmlElement(d => {
    //   const el = document.createElement(`<div>WTF?</div>`)
    //   el.innerHTML = markerSvg
    //   el.style.color = d.color
    //   el.style.width = `${d.size}px`
    //   // el.style['pointer-events'] = 'auto'
    //   el.style.cursor = 'pointer'
    //   el.onclick = () => console.info(d)
    //   return el;
    // })

    globeRef.current.ringsData(gData)
    globeRef.current.ringColor(() => 'white')
    globeRef.current.ringMaxRadius(20)
    globeRef.current.ringPropagationSpeed(-4)
    globeRef.current.ringRepeatPeriod(1500)
    globeRef.current.ringAltitude(0.05)
    


    // globeRef.current.htmlLat(lat)
    // globeRef.current.htmlLng(lng)
    // globeRef.current.htmlAltitude(.3)
    // globeRef.current.htmlElement(markerSvg)

    globeRef.current.labelsData(gData2)
    globeRef.current.labelLat(lat)
    globeRef.current.labelLng(lng)
    globeRef.current.labelText(() => ` `)
    globeRef.current.labelSize('size')
    globeRef.current.labelDotRadius(3)
    globeRef.current.labelColor(() => 'white');
    globeRef.current.labelAltitude(.1);
    // globeRef.current.onLabelClick(() => console.log('CLICKED!'))


    // globeRef.current.polygonsData(landPolygons)
    // globeRef.current.polygonCapMaterial(polygonsMaterial)
    // globeRef.current.polygonSideColor(() => 'rgba(0, 0, 0, 0)')
    // globeRef.current.polygonAltitude(0.02)

    // globeRef.current.objectData(points)
    // // globeRef.current.objectLat('lat')
    // // globeRef.current.objectLng('lng')
    // globeRef.current.objectAltitude(.4)
    // globeRef.current.objectFacesSurface(false);
    
    globeRef.current.pointsData(points)
    globeRef.current.pointAltitude('size')
    globeRef.current.pointColor('color')
    globeRef.current.pointRadius(.5)

  }, [])

  

  // This is a ThreeGlobe object but represented in JSX.
  // Any valid properties of that class are valid props
  return <threeGlobe {...props} ref={globeRef} />
}

export default Globe;