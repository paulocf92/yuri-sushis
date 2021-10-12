import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const TopBlock = styled.View`
  position: absolute;
  top: 0%;
  height: 45%;
  padding: 0 20px 30px;
  justify-content: flex-end;

  background-color: ${({ theme }) => theme.colors.background_darker};
`;

export const Wrapper = styled.View``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: 40px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white_translucent};
`;

export const HashiImage = styled.Image`
  position: absolute;
  top: 50%;
`;
