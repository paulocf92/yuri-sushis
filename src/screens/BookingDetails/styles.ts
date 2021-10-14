import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  padding-bottom: 60px;
  font-family: ${({ theme }) => theme.fonts.primary_300};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white_translucent};
`;

export const Wrapper = styled.View`
  width: 100%;
`;

export const DateTimeButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  height: 40px;
  margin: 5px 0 15px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const DateTimeButtonLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.white_translucent};
`;

export const DateTimeButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.background_darker};
`;

export const BookNowButton = styled(Button)``;
