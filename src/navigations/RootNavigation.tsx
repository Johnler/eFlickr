import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Photos from '../screens/Photos';
import Favorites from '../screens/Favorites';

const Tab = createBottomTabNavigator()

const RootNavigation = (props: any) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Photos" component={Photos} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
};


export default RootNavigation;

