import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

import { Container, Title } from './styles';

import { StackNavigation } from '../../routes/types';

export default function Booking() {
  const { navigate } = useNavigation<StackNavigation>();

  return (
    <Container>
      <Title>
        Pick a date to try out some of our dishes, you will be surprised!
      </Title>

      <Button
        title='Make a reservation'
        onPress={() => navigate('BookingDetails')}
      />
    </Container>
  );
}
