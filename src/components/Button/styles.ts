import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
  color?: string;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 180px;
  height: 60px;
  border-radius: 10px;

  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.yellow};

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_300};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.white};
`;
