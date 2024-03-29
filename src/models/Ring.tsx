// import { Loader, useGLTF } from "@react-three/drei";
// import RingScene from "../assets/3D/ring.glb";
import { Suspense, useEffect, useRef } from "react";
// import * as THREE from 'three'
import { FakeGlowMaterial } from "../materials/FakeGlowMaterial";
import {useFrame} from "@react-three/fiber";
import * as THREE from 'three'

export const Ring = ({ rotation }) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    meshRef.current.rotation.x += 0.5 * delta;
    meshRef.current.rotation.y += 0.5 * delta;
    meshRef.current.rotation.z += 0.5 * delta;
  });

  return (
    <mesh ref={meshRef} scale={1} position={[0, 20, 0]} rotation={rotation}>
      <FakeGlowMaterial />
      <torusGeometry args={[100, 1, 2, 128]} />
    </mesh>
  );
};
