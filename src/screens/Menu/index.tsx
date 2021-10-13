import React, { useEffect, useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler } from 'react-native';

import { Dish } from '../../interfaces/Dish';

import LoadingAnimation from '../../components/LoadingAnimation';
import MenuItem from './MenuItem';

import { Container, Title, ListWrapper, DishesList, Separator } from './styles';

export default function Menu() {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchSushiDishes() {
      try {
        const response = await fetch(
          'https://api.spoonacular.com/food/products/search?query=sushi&apiKey=696374bcf2c2444e9f54ef5ee271331d&number=42'
        );
        const data = await response.json();

        const sushiOnly = data.products
          .filter((dish: Dish) => dish.title.includes('Sushi'))
          .map((dish: Dish) => ({ ...dish, id: String(dish.id) }));

        setDishes(sushiOnly);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSushiDishes();
  }, []);

  useFocusEffect(
    useCallback(() => {
      const handler = () => {
        BackHandler.exitApp();
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', handler);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', handler);
    }, [])
  );

  return (
    <Container>
      <Title>
        All of our products have been carefully selected, satisfaction
        guaranteed!
      </Title>

      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <ListWrapper>
          <DishesList
            data={dishes}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <MenuItem data={item} />}
            ItemSeparatorComponent={() => <Separator />}
          />
        </ListWrapper>
      )}
      {/* <FlatList
            data={cars}
            keyExtractor={item => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CarWrapper>
                <Car data={item.car} />

                <CarFooter>
                  <CarFooterTitle>PERÍODO</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>{item.startDate}</CarFooterDate>
                    <AntDesign
                      name='arrowright'
                      size={20}
                      color={theme.colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <CarFooterDate>{item.endDate}</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>
            )}
          /> */}
    </Container>
  );
}
