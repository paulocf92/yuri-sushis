import React, { useCallback, useState } from 'react';
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from '@react-navigation/native';

import Button from '../../components/Button';
import LoadingAnimation from '../../components/LoadingAnimation';

import { Container, Title } from './styles';

import { StackNavigation } from '../../routes/types';

type RouteParams = {
  dateFormatted: string;
  timeFormatted: string;
};

export default function BookingConfirmation() {
  const [fakeLoading, setFakeLoading] = useState(true);
  const { navigate } = useNavigation<StackNavigation>();
  const route = useRoute();

  const { dateFormatted, timeFormatted } = route.params as RouteParams;

  useFocusEffect(
    useCallback(() => {
      setTimeout(() => setFakeLoading(false), 3000);
    }, [])
  );

  return (
    <Container>
      {fakeLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          <Title>
            Your reservation has been successfully booked for {dateFormatted} at{' '}
            {timeFormatted}!
          </Title>

          <Button title='Ok' color='#333' onPress={() => navigate('Booking')} />
        </>
      )}
    </Container>
  );
}
