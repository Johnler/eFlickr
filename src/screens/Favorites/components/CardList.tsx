import * as React from 'react';
import { FlatList, Text, View, StyleSheet, Dimensions } from 'react-native';
import { ImageCard } from '../../../components/';
import { logger } from '../../../utils';

interface CardListProps {
  data?: IPhoto[];
  fetching?: boolean
}

interface IData {
  page: number;
  pages: number;
  perpage: number;
  photo?: IPhoto[]
}

interface IPhoto {
  id: string;
  title: string;
  ownername: string;
  url_m: string;
}


const CardList = (props: CardListProps) => {
  const { width } = Dimensions.get('screen')
  const { 
    data, 
   } = props
  return (
    <View style={styles.container}>
      { data?.length ? (<FlatList 
        data={data}
        renderItem={({item}) => <ImageCard 
          style={{
          width: width,
          height: 200
          }} 
          uri={item.url_m}
          title={item.title}
          ownername={item.ownername}
          />
        }
        keyExtractor={item => item.id}
      />) : (null)}
    </View>
  );
};

export default CardList;

const styles = StyleSheet.create({
  container: {}
});
