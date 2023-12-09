import React, { useMemo } from 'react';
import { MeshProps } from '@react-three/fiber';
import { MatGeometry } from '../../geometry';
import { MatMaterial } from '../../material';

export interface MatSurfaceProps extends MeshProps {}

export const MatPlaceholder: React.FC<MatSurfaceProps> = React.forwardRef(
  ({ ...props }, ref) => {
    const geometry = useMemo(() => new MatGeometry(), []);
    const material = useMemo(() => new MatMaterial(), []);

    return (
      <mesh {...props} ref={ref} geometry={geometry} material={material}></mesh>
    );
  },
);
