import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, ImageCard } from '../../components'
import CardList from './components/CardList'
import { logger } from '../../utils'


interface PhotosProps {}

const DATA = [
  { id:0, uri: undefined},
  { id:1, uri: undefined},
  { id:2, uri: undefined},
  { id:3, uri: undefined},
]

const Photos = (props: PhotosProps) => {
  return (
    <View style={styles.container}>
       <CardList 
        data={DATA}
       />
    </View>
  );
};

export default Photos;

const styles = StyleSheet.create({
  container: {}
});
