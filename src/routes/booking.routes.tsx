import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Booking from '../screens/Booking';
import BookingDetails from '../screens/BookingDetails';
import BookingConfirmation from '../screens/BookingConfirmation';

const { Navigator, Screen } = createNativeStackNavigator();

export default function BookingRoutes() {
  return (
    <Navigator
      initialRouteName='Booking'
      screenOptions={{ headerShown: false }}
    >
      <Screen name='Booking' component={Booking} />
      <Screen name='BookingDetails' component={BookingDetails} />
      <Screen name='BookingConfirmation' component={BookingConfirmation} />
    </Navigator>
  );
}
