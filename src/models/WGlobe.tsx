/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Ep Digital Design (https://sketchfab.com/Epdigitaldesign)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/wireframe-3d-globe-20adb20e73ee4b68bc1207e1675b8891
Title: Wireframe 3D Globe
*/

import { Loader, OrbitControls, useGLTF } from '@react-three/drei'
import GlobeScene from '../assets/3D/globe-simple.glb'
import PostProcessingEffects from '../components/Effects'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'

const WGlobe = (props: any) => {
  const { nodes } = useGLTF(GlobeScene)
  return (
    <group {...props} dispose={null}>
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={new THREE.MeshStandardMaterial({ color: 0xffffff, opacity: 1, transparent: true })}
        rotation={[-0.811, 0.603, -1.032]}
        scale={[1.905, 0.038, 1.905]}
      />
    </group>
  )
}

useGLTF.preload(GlobeScene)

export default () => (
    <Canvas
        orthographic
        // shadows
        camera={{
        zoom: 20,
        position: [0, 0, 10],
        }}
    >
        <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 10]} intensity={0.9} />
        <directionalLight position={[0, 0, -10]} intensity={0.9} />
        <PostProcessingEffects />
        <Suspense fallback={<Loader />}>
        <mesh scale={0.5} position={[0, 0, 0]}>
            <WGlobe />
        </mesh>
        </Suspense>
    </Canvas>
  );

