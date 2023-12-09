import { useXREvent } from '@react-three/xr';
import React, { useEffect, useMemo, useRef } from 'react';
import { Matrix4, Mesh, MeshBasicMaterial, Object3D } from 'three';
import { MatEvent, MatModel } from './MatModel';
import { useFrame } from '@react-three/fiber';
import { MatGeometry } from '../../geometry';
import { MatMaterial } from '../../material';

export interface MatProps {
  onStartDrag?: () => void;
  onPlace?: (transform: Matrix4) => void;
}

export const Mat: React.FC<MatProps> = props => {
  const model = useMemo(() => new MatModel(), []);
  const geometry = useMemo(() => new MatGeometry(), []);
  const material = useMemo(() => new MatMaterial(), []);
  const controllerRef = useRef<Object3D>();
  const meshRef = useRef<Mesh>(null!);

  useEffect(() => {
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

    model.startDrag(controllerRef.current.position);
  });

  useXREvent('selectend', event => {
    if (controllerRef.current === event.target.grip) {
      controllerRef.current = undefined;
    }

    model.stopDrag();
  });

  useFrame(() => {
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

  return <mesh ref={meshRef} geometry={geometry} material={material}></mesh>;
};
