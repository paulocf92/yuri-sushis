import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
  Extrapolate,
  runOnJS,
} from 'react-native-reanimated';

import HashiPng from '../../assets/hashi.png';

import { StackNavigation } from '../../routes/types';

import {
  Container,
  TopBlock,
  Title,
  Description,
  HashiImage,
  Footer,
} from './styles';

const AnimatedImage = Animated.createAnimatedComponent(HashiImage);
const AnimatedBlock = Animated.createAnimatedComponent(TopBlock);
const AnimatedGradient = Animated.createAnimatedComponent(Footer);

export default function Splash() {
  const navigation = useNavigation<StackNavigation>();
  const splashAnimation = useSharedValue(0);

  const blockStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 35, 50], [0, 0.3, 1]),
    };
  });

  const gradientStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 35, 50], [0, 0.3, 1]),
    };
  });

  const hashiImageStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, 0.3, 1]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [200, 150],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  function startApp() {
    navigation.navigate('App');
  }

  useEffect(() => {
    splashAnimation.value = withTiming(50, { duration: 2000 }, () => {
      'worklet';
      runOnJS(startApp)();
    });
  }, []);

  return (
    <Container>
      <AnimatedBlock style={[blockStyle]}>
        <Title>Yuri Sushis</Title>
        <Description>Full control of what you use and pay for</Description>
      </AnimatedBlock>
      <AnimatedImage source={HashiPng} style={[hashiImageStyle]} />

      <AnimatedGradient style={[gradientStyle]} />
    </Container>
  );
}
