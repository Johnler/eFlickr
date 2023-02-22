import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface PhotosProps {}

const Photos = (props: PhotosProps) => {
  return (
    <View style={styles.container}>
      <Text>Photos</Text>
    </View>
  );
};

export default Photos;

const styles = StyleSheet.create({
  container: {}
});
