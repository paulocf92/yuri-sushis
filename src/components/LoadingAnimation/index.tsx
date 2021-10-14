import React from 'react';
import LottieView from 'lottie-react-native';

import loadingSushi from '../../assets/cute-sushi.json';

import { Container } from './styles';

export default function LoadingAnimation() {
  return (
    <Container>
      <LottieView
        source={loadingSushi}
        style={{ height: 200 }}
        resizeMode='contain'
        autoPlay
        loop
      />
    </Container>
  );
}
