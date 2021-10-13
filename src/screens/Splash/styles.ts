import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const TopBlock = styled.View`
  position: absolute;
  top: 0%;
  height: 50%;
  padding: 0 20px 60px;
  justify-content: flex-end;

  background-color: ${({ theme }) => theme.colors.background_darker};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: 40px;
  color: ${({ theme }) => theme.colors.white};
  padding-bottom: 10px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white_translucent};
`;

export const HashiImage = styled.Image`
  position: absolute;
  top: 55%;
`;

export const Footer = styled(LinearGradient).attrs({
  colors: [
    theme.colors.yellow,
    theme.colors.yellow,
    theme.colors.background,
    theme.colors.background,
  ],
  start: { x: 0.4, y: 0.3 },
  end: { x: 0.41, y: 0.92 },
  locations: [0, 0.49, 0.5, 1],
})`
  height: 50px;
`;
