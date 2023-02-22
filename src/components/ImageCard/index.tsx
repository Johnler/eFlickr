import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ImageCardProps {}

const ImageCard = (props: ImageCardProps) => {
  return (
    <View style={styles.container}>
      <Text>ImageCard</Text>
    </View>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  container: {}
});
