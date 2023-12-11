import React from 'react';
import { Matrix4 } from 'three';
import { Mat } from '../../components/Mat/Mat';
import { ControllerHint } from '../../components/ControllerHint/ControllerHint';

export interface SceneSetupProps {
  onMatPlace?: (transform: Matrix4) => void;
}

export const SceneSetup: React.FC<SceneSetupProps> = ({ onMatPlace }) => {
  return (
    <>
      <Mat onPlace={onMatPlace} />
      <ControllerHint handedness="left">Place Mat</ControllerHint>
      <ControllerHint handedness="right">Place Mat</ControllerHint>
    </>
  );
};
