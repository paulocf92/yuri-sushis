import React, { useEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from 'styled-components';

import HashiPng from '../../assets/hashi.png';

import {
  Container,
  TopBlock,
  Wrapper,
  Title,
  Description,
  HashiImage,
} from './styles';

const AnimatedImage = Animated.createAnimatedComponent(HashiImage);
const AnimatedWrapper = Animated.createAnimatedComponent(Wrapper);

export default function Splash() {
  const theme = useTheme();
  const splashAnimation = useSharedValue(0);

  const blockStyle = useAnimatedStyle(() => {
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

  useEffect(() => {
    splashAnimation.value = withTiming(50, { duration: 2000 });
  }, []);

  return (
    <Container>
      <TopBlock>
        <AnimatedWrapper style={[blockStyle]}>
          <Title>Sushi</Title>
          <Description>Full control of what you use and pay for</Description>
        </AnimatedWrapper>
      </TopBlock>
      <AnimatedImage source={HashiPng} style={[hashiImageStyle]} />

      <LinearGradient
        colors={[
          theme.colors.yellow,
          theme.colors.yellow,
          theme.colors.background,
          theme.colors.background,
        ]}
        start={{ x: 0.4, y: 0.3 }}
        end={{ x: 0.41, y: 0.92 }}
        locations={[0, 0.49, 0.5, 1]}
        style={{
          height: 50,
        }}
      />
    </Container>
  );
}
