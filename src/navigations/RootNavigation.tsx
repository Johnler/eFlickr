import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Photos from '../screens/Photos';
import Favorites from '../screens/Favorites';

const Tab = createBottomTabNavigator()

const RootNavigation = (props: any) => {
  return (
    <Tab.Navigator
    >
      <Tab.Screen 
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="image" size={30} color={color}/>
          )
        }}
        name="Photos" 
        component={Photos} />
      <Tab.Screen 
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="star" size={30} color={color}/>
          )
        }}
        name="Favorites" 
        component={Favorites} />
    </Tab.Navigator>
  );
};


export default RootNavigation;

