import React, { useRef } from 'react';
import { colors } from '../../theme/colors';
import { useController } from '@react-three/xr';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { Group, Vector3 } from 'three';

interface ControllerHintProps {
  handedness: XRHandedness;
  children?: string | string[];
}

export const ControllerHint: React.FC<ControllerHintProps> = ({
  handedness,
  children,
}) => {
  const objRef = useRef<Group>(null!);
  const ctrl = useController(handedness);
  const controller = ctrl?.controller;

  useFrame(() => {
    if (!controller || !objRef.current) {
      return;
    }

    objRef.current.position.copy(controller.position);
    objRef.current.quaternion.copy(controller.quaternion);
    objRef.current.scale.copy(controller.scale);
  });

  return (
    <group ref={objRef} visible={!!ctrl?.visible}>
      <Text
        position={new Vector3(0, 0.05, 0)}
        fontSize={0.05}
        color={colors.light}
        anchorX="center"
        anchorY="middle"
      >
        {children}
      </Text>
    </group>
  );
};
