import * as React from 'react';
import { View, StyleSheet,  } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Text } from '../'
import { logger } from '../../utils';

interface ImageCardProps {
  uri?: string;
  style?: any;
  title?: string;
  ownername?: string;
}

const ImageCard = (props: ImageCardProps) => {
  const { 
    uri = "https://unsplash.it/400/400?image=1",
    style,
    title,
    ownername
   } = props;
  return (
    <View style={styles.container}>
      <FastImage 
        style={{...styles.image, ...style}}
        source={{
          uri: uri,
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.cacheOnly
        }}
      />
      <View style={styles.textContainer}>
      <View style={styles.iconContainer}>
          <Text styles={styles.textIcon}>+</Text>
        </View>
        <View style={styles.captionContainer}>
          <Text styles={styles.textTitle}>{title}</Text>
          <Text styles={styles.textOwner}>{ownername}</Text>
        </View>

      </View>

    </View>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  container: {
  },
  textContainer: {
    position: 'absolute',
    borderWidth: 1,
    flexDirection: 'column',
    height: '100%',
    width: '100%'
  },
  iconContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: '2%'
  },
  captionContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginLeft: '2%',
    marginBottom: '2%'
  },
  textIcon: {
    color: '#fefefe',
    fontSize: 50,
    flex: 1
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textTitle: {
    color: '#fefefe',
    fontSize: 40,
    fontWeight: 'bold'
  },
  textOwner: {
    color: '#fefefe'
  }

});
