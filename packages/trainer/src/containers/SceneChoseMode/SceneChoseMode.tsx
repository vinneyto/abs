import React, { useMemo } from 'react';
import { Euler, Matrix4, Quaternion, Vector3 } from 'three';
import { MatPlaceholder } from '../../components/MatPlaceholder';
import { RootObject, Text } from '@coconut-xr/koestlich';
import { loadYoga } from '@coconut-xr/flex';
import RectMesh from '../../objects/Rect';
import { Card } from '../../components';
import { colors } from '../../theme/colors';

export interface SceneChoseModeProps {
  matBasis: Matrix4;
}

export const SceneChoseMode: React.FC<SceneChoseModeProps> = ({ matBasis }) => {
  const mesh = useMemo(() => new RectMesh(), []);

  const matPos = new Vector3();
  const matQuat = new Quaternion();
  const matScale = new Vector3();

  matBasis.decompose(matPos, matQuat, matScale);

  return (
    <>
      <MatPlaceholder position={matPos} quaternion={matQuat} scale={matScale} />
      <object3D position={matPos} quaternion={matQuat}>
        <RootObject
          loadYoga={loadYoga}
          object={mesh}
          depth={16}
          color={0xcfaf8d}
          padding={16}
          flexDirection="column"
          position={new Vector3(-0.5, 0.5, 0)}
          rotation={new Euler(0, Math.PI / 2, 0)}
        >
          <Card
            radius={16}
            ratio={3}
            width={150}
            height={50}
            marginBottom={16}
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize={16} color={colors.primary}>
              Start new training
            </Text>
          </Card>
          <Card
            radius={16}
            ratio={3}
            width={150}
            height={50}
            marginBottom={16}
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize={16} color={colors.primary}>
              Watch training
            </Text>
          </Card>
          <Card
            radius={16}
            ratio={3}
            width={150}
            height={50}
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize={16} color={colors.primary}>
              Replace mat
            </Text>
          </Card>
        </RootObject>
      </object3D>
    </>
  );
};
