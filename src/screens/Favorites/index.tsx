import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface FavoritesProps {}

const Favorites = (props: FavoritesProps) => {
  return (
    <View style={styles.container}>
      <Text>Favorites</Text>
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {}
});
