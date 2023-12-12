import React from 'react';
import { Euler, Matrix4, Quaternion, Vector3 } from 'three';
import { MatPlaceholder } from '../../components/MatPlaceholder';
import { Button } from '../../components';
import { useStoreDispatch } from '../../store';
import { CurrentScene, setCurrentScene } from '../../features';

export interface SceneChoseModeProps {
  matBasis: Matrix4;
}

export const SceneChoseMode: React.FC<SceneChoseModeProps> = ({ matBasis }) => {
  const dispatch = useStoreDispatch();

  const matPos = new Vector3();
  const matQuat = new Quaternion();
  const matScale = new Vector3();

  matBasis.decompose(matPos, matQuat, matScale);

  return (
    <>
      <MatPlaceholder position={matPos} quaternion={matQuat} scale={matScale} />
      <group position={matPos} quaternion={matQuat}>
        <group
          position={new Vector3(-0.5, 0.5, 0)}
          rotation={new Euler(0, Math.PI / 2, 0)}
        >
          <Button
            position={new Vector3(0, 0.2, 0)}
            width={0.5}
            height={0.15}
            label="Start new training"
          />
          <Button
            position={new Vector3(0, 0, 0)}
            width={0.5}
            height={0.15}
            label="Watch training"
          />
          <Button
            position={new Vector3(0, -0.2, 0)}
            width={0.5}
            height={0.15}
            label="Replace mat"
            onSelect={() => {
              dispatch(setCurrentScene(CurrentScene.SceneSetup));
            }}
          />
        </group>
      </group>
    </>
  );
};
