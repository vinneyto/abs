import { Container, Object } from '@coconut-xr/koestlich';
import React, { ComponentPropsWithoutRef, useMemo } from 'react';
import CardMesh from '../../objects/Card';
import { colors } from '../../theme/colors';

interface CardProps extends ComponentPropsWithoutRef<typeof Container> {
  hoverAnimation?: boolean;
  ratio: number;
  radius: number;
}

export const Card: React.FC<CardProps> = ({
  hoverAnimation = true,
  radius,
  ratio,
  ...props
}) => {
  const radiusM = radius * 0.002;
  const mesh = useMemo(() => new CardMesh(radiusM, ratio), [ratio, radiusM]);

  return (
    <Object
      {...props}
      object={mesh}
      padding={6}
      depth={2}
      // translateZ={isHovered && hoverAnimation ? 4 : 0}
      color={colors.white}
    />
  );
};
