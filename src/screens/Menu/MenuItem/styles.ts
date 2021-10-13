import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
`;

export const Title = styled.Text`
  width: 250px;
  padding-left: 10px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
`;
