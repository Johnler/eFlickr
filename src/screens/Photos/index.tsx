import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, ImageCard } from '../../components'
import CardList from './components/CardList'
import { logger, AxiosGet } from '../../utils'
import { flickr_url } from '../../utils/flickrAPI'

import type { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux'
import { actions } from './slice';

import { IPhotosProps, IData } from './types'


const Photos = (props: IPhotosProps) => {
  const state = useSelector((state:RootState) => state.photo)
  logger.info(state)
  const dispatch = useDispatch()
  const [images, setImages] = useState<IData>({})
  
  useEffect(() => {
    handleImageRequest()
  }, [])

  const handleImageRequest = async() => {
    const response = await AxiosGet(flickr_url)
    //@ts-ignore
    setImages(response?.data.photos)
    dispatch(actions.setPhoto(response?.data.photos))
  }

  return (
    <View style={styles.container}>
       <CardList 
        data={images}
       />
    </View>
  );
};

export default Photos;

const styles = StyleSheet.create({
  container: {}
});
