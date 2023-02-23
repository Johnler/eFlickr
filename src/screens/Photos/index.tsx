import React, { useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import CardList from './components/CardList'
import { logger, AxiosGet } from '../../utils'
import { flickr_url } from '../../utils/flickrAPI'

import type { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux'
import { actions } from './slice';
import { actions as favActions } from '../Favorites/slice'

import { IPhotosProps, IPhoto } from './types'


const Photos = (props: IPhotosProps) => {
  const state = useSelector((state:RootState) => state.photo)
  const fav_state = useSelector((state:RootState) => state.favorite)
  const dispatch = useDispatch()
  
  useEffect(() => {
    if(!state.photos?.photo.length){
      logger.info("REQUEST PHOTOS")
      handleImageRequest()
      return
    }
      logger.info("USE CACHE PHOTOS")
  }, [])

  const handleImageRequest = async() => {
    const response = await AxiosGet(flickr_url)
    dispatch(actions.setPhoto(response?.data.photos))
  }

  const handlePullRequest = async() => {
    dispatch(actions.setFetch(true));
    const response = await AxiosGet(flickr_url)
    if(!response?.data.photos){
      dispatch(actions.setFetch(false))
      Alert.alert('Error', `Network Error`)
      return
    }
    dispatch(actions.setFetch(false))
    dispatch(actions.setPhoto(response?.data.photos))
  }

  const handleAddFavorite = (data: IPhoto) => {
    dispatch(favActions.addFavorite(data))
  }

  return (
    <View style={styles.container}>
       <CardList 
        data={state.photos}
        onRefresh={handlePullRequest}
        fetching={state.fetching}
        onPressFavorite={handleAddFavorite}
       />
    </View>
  );
};

export default Photos;

const styles = StyleSheet.create({
  container: {}
});
