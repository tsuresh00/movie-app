import * as React from 'react';


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomePage from '../Pages/HomePage';
import TvShowPage from '../Pages/TvShowpage';
import SearchPage from '../Pages/SearchPage';
import MovieListPage from '../Pages/MovieListPage';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={HomePage} />
      <Tab.Screen name="Search Results" component={SearchPage} />
      <Tab.Screen name="Tv shows" component={TvShowPage} />
    </Tab.Navigator>
  );
}

export default MyTabs;