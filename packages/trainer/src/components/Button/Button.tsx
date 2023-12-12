import React, { useState } from 'react';
import { colors } from '../../theme/colors';
import { GroupProps } from '@react-three/fiber';
import { Interactive } from '@react-three/xr';
import { Text } from '@react-three/drei';
import { Vector3 } from 'three';

interface ButtonProps extends GroupProps {
  label: string;
  width?: number;
  height?: number;
  depth?: number;
  fontSize?: number;
  onSelect?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  width = 0.5,
  height = 0.5,
  depth = 0.02,
  fontSize = 0.05,
  onSelect,
  ...props
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Interactive
      onSelect={onSelect}
      onHover={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <group {...props}>
        <mesh scale={new Vector3(width, height, depth)}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial
            transparent
            color={!hovered ? colors.primary : colors.primaryHover}
            depthWrite={false}
            depthTest={false}
            opacity={0.5}
          />
        </mesh>
        <Text
          position={[0, 0, depth / 2 + 0.01]}
          fontSize={fontSize}
          color={colors.light}
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
      </group>
    </Interactive>
  );
};
