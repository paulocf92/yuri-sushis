import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface Props extends RectButtonProps {
  color?: string;
  title: string;
}

export default function Button({ title, color, ...rest }: Props) {
  return (
    <Container color={color} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
