import React, { useMemo } from 'react';
import { MeshProps } from '@react-three/fiber';
import { DoubleSide, MeshBasicMaterial, PlaneGeometry } from 'three';

export interface MatSurfaceProps extends MeshProps {}

export const MatPlaceholder: React.FC<MatSurfaceProps> = React.forwardRef(
  ({ ...props }, ref) => {
    const geometry = useMemo(
      () => new PlaneGeometry(0.5, 1).rotateX(Math.PI / 2),
      [],
    );
    const material = useMemo(
      () =>
        new MeshBasicMaterial({
          color: 'blue',
          transparent: true,
          depthTest: false,
          depthWrite: false,
          opacity: 0.5,
          side: DoubleSide,
        }),
      [],
    );

    return (
      <mesh {...props} ref={ref} geometry={geometry} material={material}></mesh>
    );
  },
);
