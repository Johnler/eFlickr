import * as React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { ImageCard } from '../../../../components';

interface CardListProps {
  data: IData[]
}

interface IData {
  id: string | number;
  uri?: string;
}


const CardList = (props: CardListProps) => {
  const { data } = props
  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        renderItem={({item}) => <ImageCard 
          style={{
          width: 400,
          height: 200
          }} 
          uri={item.uri}/>
        }
      />
    </View>
  );
};

export default CardList;

const styles = StyleSheet.create({
  container: {}
});
