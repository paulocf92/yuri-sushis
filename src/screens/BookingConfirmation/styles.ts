import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 50px 20px;

  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  padding-bottom: 10px;
  font-family: ${({ theme }) => theme.fonts.primary_300};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white_translucent};
`;
