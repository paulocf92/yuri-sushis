import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import Menu from '../screens/Menu';
import Booking from '../screens/Booking';

import BookingRoutes from './booking.routes';

const { Navigator, Screen } = createBottomTabNavigator();

export default function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      backBehavior='initialRoute'
      initialRouteName='Menu'
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.background_darker,
        },
        headerTintColor: theme.colors.white,
        headerTitleStyle: {
          fontFamily: theme.fonts.primary_600,
        },
        tabBarActiveTintColor: theme.colors.yellow_light,
        tabBarInactiveTintColor: theme.colors.gray,
        tabBarLabelPosition: 'beside-icon',
        tabBarActiveBackgroundColor: theme.colors.background_darker,
        tabBarInactiveBackgroundColor: theme.colors.background_darker,
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          borderTopWidth: 0,
          height: 60,
        },
      }}
    >
      <Screen
        name='Menu'
        component={Menu}
        options={{
          tabBarLabel: 'Menu',
          headerTitle: 'Our Menu',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name='menu-book' size={size} color={color} />
          ),
        }}
      />
      <Screen
        name='BookingRoutes'
        component={BookingRoutes}
        options={{
          tabBarLabel: 'Booking',
          headerTitle: 'Booking',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name='bookmark' size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
