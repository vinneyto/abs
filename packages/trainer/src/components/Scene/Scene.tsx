import React, { useRef, useState } from 'react';
import { Matrix4, Mesh, Quaternion, Vector3 } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mat } from '../Mat/Mat';
import { ARButton, Controllers, Hands, XR } from '@react-three/xr';

interface BoxProps {
  position?: Vector3;
  active?: boolean;
}

const Box: React.FC<BoxProps> = ({ active, position }) => {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={active ? 1.5 : 1}>
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshStandardMaterial color={active ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

export const Scene: React.FC = () => {
  const [boxVisible, setBoxVisible] = useState(false);
  const [matBasis, setMatBasis] = useState(new Matrix4());

  const boxPosition = new Vector3();
  matBasis.decompose(boxPosition, new Quaternion(), new Vector3());

  return (
    <>
      <ARButton />
      <Canvas>
        <XR>
          <Controllers />
          <Hands />
          <ambientLight intensity={0.1} />
          <directionalLight color="white" position={[0, 0, 5]} />
          {boxVisible && <Box position={boxPosition} />}
          <Mat
            onStartDrag={() => setBoxVisible(false)}
            onPlace={transform => {
              setBoxVisible(true);
              setMatBasis(transform);
            }}
          />
        </XR>
      </Canvas>
    </>
  );
};
