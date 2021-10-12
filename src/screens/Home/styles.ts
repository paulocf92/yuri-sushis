import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  padding: 20px;

  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 20px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: 30px;
`;
