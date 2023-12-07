import { useXREvent } from '@react-three/xr';
import React, { useEffect, useRef } from 'react';
import {
  DoubleSide,
  Matrix4,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  PlaneGeometry,
} from 'three';
import { MatEvent, MatModel } from './MatModel';
import { useFrame } from '@react-three/fiber';

const matPlaneGeometry = new PlaneGeometry(0.5, 1).rotateX(Math.PI / 2);
const matPlaneMaterial = new MeshBasicMaterial({
  color: 'blue',
  transparent: true,
  opacity: 0.5,
  side: DoubleSide,
});

export interface MatProps {
  onStartDrag?: () => void;
  onPlace?: (transform: Matrix4) => void;
}

export const Mat: React.FC<MatProps> = props => {
  const controllerRef = useRef<Object3D>();
  const modelRef = useRef<MatModel>();
  const meshRef = useRef<Mesh>(null);

  useEffect(() => {
    if (modelRef.current) {
      return;
    }
    const model = new MatModel();

    modelRef.current = model;

    model.on(MatEvent.StartDrag, () => {
      if (props.onStartDrag) {
        props.onStartDrag();
      }
    });

    model.on(MatEvent.Placed, (transform: Matrix4) => {
      if (props.onPlace) {
        props.onPlace(transform);
      }
    });

    return () => {
      model.removeAllListeners();
    };
  }, []);

  useXREvent('selectstart', event => {
    if (controllerRef.current) {
      return;
    }

    controllerRef.current = event.target.grip;

    modelRef.current!.startDrag(controllerRef.current.position);
  });

  useXREvent('selectend', event => {
    if (controllerRef.current === event.target.grip) {
      controllerRef.current = undefined;
    }

    modelRef.current!.stopDrag();
  });

  useFrame(() => {
    if (!meshRef.current || !modelRef.current) {
      return;
    }

    const model = modelRef.current;
    const mesh = meshRef.current;
    const currentController = controllerRef.current;

    if (currentController) {
      model.setControllerPosition(currentController.position);
    }

    const { position, quaternion, scale } = mesh;

    model.update();
    model.getTransform().decompose(position, quaternion, scale);

    mesh.visible = model.isVisible();
    (mesh.material as MeshBasicMaterial).opacity = model.getOpacity();
  });

  return (
    <mesh ref={meshRef} geometry={matPlaneGeometry} material={matPlaneMaterial}>
      <axesHelper />
    </mesh>
  );
};
