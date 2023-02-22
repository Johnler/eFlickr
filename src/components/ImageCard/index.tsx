import * as React from 'react';
import { Text, View, StyleSheet,  } from 'react-native';
import FastImage from 'react-native-fast-image';
import { logger } from '../../utils';

interface ImageCardProps {
  uri?: string;
  style?: any;
}

const ImageCard = (props: ImageCardProps) => {
  const { 
    uri = "https://unsplash.it/400/400?image=1",
    style
   } = props;
  return (
      <FastImage 
        style={{...styles.image, ...style}}
        source={{
          uri: uri,
          priority: FastImage.priority.normal,
        }}
      />
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%'
  }
});
