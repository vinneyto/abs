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

  return (
    <>
      <MatPlaceholder {...getTransform(matBasis)} />
      <group {...getTransform(landscapeBasis(matBasis))}>
        <axesHelper></axesHelper>
        <group
          position={new Vector3(-0.5, 1.2, 0)}
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

function landscapeBasis(m: Matrix4) {
  const x = new Vector3();
  const y = new Vector3();
  const z = new Vector3();

  m.extractBasis(x, y, z);

  y.set(0, 1, 0);

  x.crossVectors(y, z).normalize();
  z.crossVectors(x, y).normalize();

  const result = new Matrix4();
  result.makeBasis(x, y, z);
  result.copyPosition(m);

  return result;
}

function getTransform(m: Matrix4) {
  const position = new Vector3();
  const quaternion = new Quaternion();
  const scale = new Vector3();

  m.decompose(position, quaternion, scale);

  return { position, quaternion, scale };
}
