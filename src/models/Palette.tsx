/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import { Suspense, useRef } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import PaletteScene from '../assets/3D/palette-transformed.glb'
import { Canvas } from '@react-three/fiber'
import PostProcessingEffects from '../components/Effects'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    defaultMaterial003: THREE.Mesh
  }
  materials: {}
}

const Palette = (props: JSX.IntrinsicElements['group']) => {

  const { nodes } = useGLTF(PaletteScene) as GLTFResult

  const material = new THREE.MeshStandardMaterial({ color: 0x00ff00, opacity: 0.85, transparent: true })

  const group = useRef<THREE.Group>(null!)

  useFrame((_, delta) => (group.current.rotation.y += delta))

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.defaultMaterial003.geometry} material={material} position={[2.225, 1.521, 0.003]} rotation={[-1.948, -0.159, -0.027]} scale={5.531} />
    </group>
  )
}

useGLTF.preload(PaletteScene)

export default () => (
    <Canvas
        orthographic
        camera={{
            position: [0, 0, 100],
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
        <Suspense fallback={null}>
            <mesh scale={6}>
                <Palette />
            </mesh>
        </Suspense>
    </Canvas>
  );