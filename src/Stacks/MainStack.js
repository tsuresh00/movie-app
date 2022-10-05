import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyTabs from './TopTabs';
import MovieListPage from '../Pages/MovieListPage';
import MovieDetailPage from '../Pages/MovieListPage';

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Toptab">
        <Stack.Screen name="MoviesList" component={MyTabs} />
        <Stack.Screen name="Details" component={MovieDetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;