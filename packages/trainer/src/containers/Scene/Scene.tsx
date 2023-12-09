import React, { useState } from 'react';
import { Matrix4 } from 'three';
import { Canvas } from '@react-three/fiber';
import { ARButton, Controllers, Hands, XR } from '@react-three/xr';
import { OrbitControls } from '@react-three/drei';
import { SceneSetup } from '../SceneSetup';
import { SceneChoseMode } from '../SceneChoseMode';
import { useStoreDispatch, useStoreSelector } from '../../store';
import { CurrentScene, setCurrentScene } from '../../features';

export const Scene: React.FC = () => {
  const currentScene = useStoreSelector(state => state.router.currentScene);
  const dispatch = useStoreDispatch();

  const [matBasis, setMatBasis] = useState(new Matrix4());

  return (
    <>
      <ARButton />
      <Canvas>
        <XR>
          <OrbitControls />
          <Controllers />
          <Hands />
          <ambientLight intensity={1} />
          <directionalLight position={[1, 1, 1]} intensity={1.5} />
          {(() => {
            switch (currentScene) {
              case CurrentScene.SceneSetup:
                return (
                  <SceneSetup
                    onMatPlace={transform => {
                      setMatBasis(transform);
                      dispatch(setCurrentScene(CurrentScene.SceneChoseMode));
                    }}
                  />
                );
              case CurrentScene.SceneChoseMode:
                return <SceneChoseMode matBasis={matBasis} />;
            }
          })()}
        </XR>
      </Canvas>
    </>
  );
};
