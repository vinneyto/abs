import React, { useRef } from 'react';
import { colors } from '../../theme/colors';
import { RootText } from '@coconut-xr/koestlich';
import { useController } from '@react-three/xr';
import { useFrame } from '@react-three/fiber';
import { Object3D, Vector3 } from 'three';

interface ControllerHintProps {
  handedness: XRHandedness;
  children?: string | string[];
}

export const ControllerHint: React.FC<ControllerHintProps> = ({
  handedness,
  children,
}) => {
  const objRef = useRef<Object3D>(null!);
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
    <object3D ref={objRef} visible={!!ctrl?.visible}>
      <RootText
        fontSize={16}
        color={colors.white}
        position={new Vector3(0, 0.1, 0)}
      >
        {children}
      </RootText>
    </object3D>
  );
};
