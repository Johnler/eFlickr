import * as React from 'react';
import { FlatList, Text, View, StyleSheet, Dimensions } from 'react-native';
import { ImageCard } from '../../../../components';

interface CardListProps {
  data?: IData;
  fetching?: boolean;
  onRefresh: (e?: any) => any;
  onPressIconFavorite?: (e?: any) => any;
}

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


const CardList = (props: CardListProps) => {
  const { width } = Dimensions.get('screen')
  const { 
    data, 
    fetching,
    onRefresh = () => {},
    onPressIconFavorite,
   } = props
  const {
    photo
  } = data
  return (
    <View style={styles.container}>
      <FlatList 
        data={photo}
        onRefresh={() => onRefresh()}
        refreshing={fetching}
        renderItem={({item}) => <ImageCard 
        onPressIconFavorite={onPressIconFavorite}
          style={{
          width: width,
          height: 200
          }} 
          id={item.id}
          uri={item.url_m}
          title={item.title}
          ownername={item.ownername}
          />
        }
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default CardList;

const styles = StyleSheet.create({
  container: {}
});
