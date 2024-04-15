/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 monitor_flat.glb --transform --types 
Files: monitor_flat.glb [19.09KB] > C:\PROJECTS\PORTFOLIO-VITE-SIMPLE\portfolio\src\assets\3D\monitor_flat-transformed.glb [4.36KB] (77%)
*/

import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    group_0_Material001_0: THREE.Mesh
    SketchUp_material_0: THREE.Mesh
    SketchUp004_Material003_0: THREE.Mesh
  }
  materials: {
    material: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/monitor_flat-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.group_0_Material001_0.geometry} material={nodes.group_0_Material001_0.material} position={[12.609, 52.176, -1.644]} rotation={[-Math.PI / 2, 0, 0]} scale={4.638} />
      <mesh geometry={nodes.SketchUp_material_0.geometry} material={materials.material} position={[-0.012, 2.136, -0.248]} rotation={[-Math.PI / 2, 0, 0]} scale={4.638} />
      <mesh geometry={nodes.SketchUp004_Material003_0.geometry} material={materials['Material.003']} position={[-0.337, 2.676, 2.436]} rotation={[-Math.PI / 2, 0, 0]} scale={4.638} />
    </group>
  )
}

useGLTF.preload('/monitor_flat-transformed.glb')
