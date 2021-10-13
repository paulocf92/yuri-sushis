import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppRoutes from './app.routes';

import Splash from '../screens/Splash';

const { Navigator, Screen } = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
      <Screen name='Splash' component={Splash} />
      <Screen name='App' component={AppRoutes} />
    </Navigator>
  );
}
