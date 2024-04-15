import { useRef } from "react";
import { FakeGlowMaterial } from "../materials/FakeGlowMaterial";
import {useFrame} from "@react-three/fiber";
import * as THREE from 'three'
import { Euler } from 'three'

type Props =  {
    rotation: Euler | undefined
}

export const Ring = ({ rotation }: Props) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    meshRef.current.rotation.x += 0.5 * delta;
    meshRef.current.rotation.y += 0.5 * delta;
    meshRef.current.rotation.z += 0.5 * delta;
  });

  return (
    <mesh ref={meshRef} scale={1.7} position={[0, 20, 0]} rotation={rotation}>
      <torusGeometry args={[100, 1, 2, 128]} />
      <FakeGlowMaterial />
    </mesh>
  );
};
