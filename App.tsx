/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
  Text,
  View
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigations/RootNavigation';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
  );
};


export default App;
