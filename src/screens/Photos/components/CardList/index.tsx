import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface CardListProps {}

const CardList = (props: CardListProps) => {
  return (
    <View style={styles.container}>
      <Text>CardList</Text>
    </View>
  );
};

export default CardList;

const styles = StyleSheet.create({
  container: {}
});
