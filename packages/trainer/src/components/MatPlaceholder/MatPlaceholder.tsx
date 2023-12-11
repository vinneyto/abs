import React, { useMemo, useRef } from 'react';
import { MeshProps } from '@react-three/fiber';
import { MatMesh } from '../../objects/Mat';

export interface MatSurfaceProps extends MeshProps {}

export const MatPlaceholder: React.FC<MatSurfaceProps> = React.forwardRef(
  ({ ...props }, ref) => {
    const mesh = useMemo(() => new MatMesh(), []);

    return (
      <mesh
        {...props}
        ref={ref}
        geometry={mesh.geometry}
        material={mesh.material}
      ></mesh>
    );
  },
);
