import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, ImageCard } from '../../components'
import CardList from './components/CardList'
import { logger, AxiosGet } from '../../utils'
import { flickr_url } from '../../utils/flickrAPI'

interface PhotosProps {}


interface IData {
  page: number;
  pages: number;
  perpage: number;
  photo: IPhoto[]
}

interface IPhoto {
  id: string;
  title: string;
  ownername: string;
  url_m: string;
}


const Photos = (props: PhotosProps) => {
  const [images, setImages] = useState<IData>({})
  
  useEffect(() => {
    handleImageRequest()
  }, [])

  const handleImageRequest = async() => {
    const response = await AxiosGet(flickr_url)
    //@ts-ignore
    logger.info("RESPONSE: ", response.data)
    setImages(response?.data.photos)
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
