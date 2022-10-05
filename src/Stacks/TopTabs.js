import * as React from 'react';


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomePage from '../Pages/HomePage';
import MovieListPage from '../Pages/MovieListPage';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={HomePage} />
      <Tab.Screen name="Search Results" component={HomePage} />
      <Tab.Screen name="Tv shows" component={HomePage} />
    </Tab.Navigator>
  );
}

export default MyTabs;