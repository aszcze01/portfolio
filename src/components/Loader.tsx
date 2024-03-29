import { Dodecahedron } from "@react-three/drei";
import * as THREE from 'three'
import { useRef } from "react";
import { RootState, useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import PostProcessingEffects from "./Effects";
// import HolographicMaterial from '../materials/HolographicMaterial';
// import { useControls } from "leva";

const Loader = () => {
  const ref = useRef<THREE.Object3D>(null!);

  useFrame(() => {
    ref.current.rotation.x += 0.02;
  });

  return (
    <>
      <PostProcessingEffects />
      <Dodecahedron ref={ref}>
        <meshLambertMaterial color="green" side={THREE.DoubleSide} />
      </Dodecahedron>
    </>
  );
};

export default () => (
  <Canvas shadows camera={{ position: [0, 0, 5] }}>
    {/* <ambientLight intensity={0.5} /> */}
    <directionalLight position={[0, 0, 10]} intensity={5} />
    <pointLight intensity={10} position={[0, -20, 10]} />
    <Loader />
  </Canvas>
);
