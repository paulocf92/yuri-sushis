import React, { useEffect } from 'react';
import { Text, BackHandler } from 'react-native';

import { Container } from './styles';

export default function Menu() {
  useEffect(() => {
    const handler = () => {
      BackHandler.exitApp();
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', handler);

    return () => BackHandler.removeEventListener('hardwareBackPress', handler);
  }, []);

  return (
    <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text>Menu</Text>
    </Container>
  );
}
