import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { Dish } from '../../interfaces/Dish';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  padding-bottom: 10px;
  font-family: ${({ theme }) => theme.fonts.primary_300};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white_translucent};
`;

export const Separator = styled.View`
  padding-top: 14px;
`;

export const ListWrapper = styled.View`
  padding: 10px 0 30px;
`;

export const DishesList = styled(FlatList as new () => FlatList<Dish>).attrs({
  showsVerticalScrollIndicator: false,
})``;
