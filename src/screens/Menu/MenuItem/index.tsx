import React from 'react';

import { Dish } from '../../../interfaces/Dish';

import { Container, Image, Title } from './styles';

interface MenuItemProps {
  data: Dish;
}

export default function MenuItem({ data }: MenuItemProps) {
  return (
    <Container>
      <Image source={{ uri: data.image }} />
      <Title>{data.title}</Title>
    </Container>
  );
}
