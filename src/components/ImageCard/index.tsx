import * as React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FastImage from 'react-native-fast-image';
import { Text } from '../'
import { logger } from '../../utils';

import type { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';


interface ImageCardProps {
  id?: string;
  uri?: string;
  style?: any;
  title?: string;
  ownername?: string;
  onPressIconFavorite?: (e?: any) => any;
  onPressIconUnFavorite?: (e?: any) => any;
}

const ImageCard = (props: ImageCardProps) => {
  const fav_state = useSelector((state:RootState) => state.favorite)
  const { 
    id,
    uri = "https://unsplash.it/400/400?image=1",
    style,
    title,
    ownername,
    onPressIconFavorite,
    onPressIconUnFavorite
   } = props;


   const found_fav = fav_state.fav_photos?.some(data => data.id === id)

  return (
    <View style={styles.container}>
      {/* <Image 
        style={{...styles.image, ...style}}
        source={{
          uri: uri
        }}
      /> */}
      {/* <LinearGradient 
          colors={['#00000000', '#990000']} 
          style={{height : '100%', width : '100%', zIndex: 2}}> */}
      <FastImage 
        style={{...styles.image, ...style}}
        source={{
          uri: uri,
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.immutable
        }}
      />
      <View style={styles.textContainer}>
      <LinearGradient  
          colors={['#00000000','#00000000', '#00000000', '#000000']} 
          style={{height : '100%', width : '100%'}}>
      <View style={styles.iconContainer}>
          {(!found_fav && onPressIconFavorite) ? (<Icon 
            onPress={() => onPressIconFavorite({id,url_m: uri,title,ownername})} 
            style={styles.textIcon} 
            name="star-circle-outline" />) : null
            }
            {
              (found_fav && onPressIconUnFavorite) ? (<Icon 
                onPress={() => onPressIconUnFavorite({id,url_m: uri,title,ownername})} 
                style={styles.textIcon} 
                name="star-circle" />) : null
            }
        </View>

        <View style={styles.captionContainer}>
          <Text styles={styles.textTitle}>{title}</Text>
          <Text styles={styles.textOwner}>{ownername}</Text>
        </View>
        </LinearGradient>
      </View>
    
        {/* </LinearGradient> */}
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
    marginRight: '2%',
    marginTop: '2%'
  },
  captionContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginLeft: '2%',
    marginBottom: '2%',
  },
  textIcon: {
    color: '#fefefe',
    fontSize: 40,
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
