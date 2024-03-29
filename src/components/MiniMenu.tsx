import { Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import WGlobe from "../models/WGlobe";
import * as THREE from 'three'

export const MiniMenu = () => {
  return (
    
        <mesh scale={1} position={[0, 0, 0]}>
          {/* <Sphere>
          <meshStandardMaterial wireframe color="white" side={THREE.DoubleSide} />
          </Sphere> */}
          <WGlobe />
        </mesh>
  );
};

// export default () => (
//     <Canvas shadows camera={{ position: [0, 0, 5] }}>
//       {/* <ambientLight intensity={0.5} /> */}
//       <directionalLight position={[0, 0, 10]} intensity={5} />
//       <pointLight intensity={10} position={[0, -20, 10]} />
//       <MiniMenu />
//     </Canvas>
//   );
