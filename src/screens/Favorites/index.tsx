import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CardList from './components/CardList';

import type { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux'
import { actions } from './slice';
import { logger } from '../../utils';

interface FavoritesProps {}

const Favorites = (props: FavoritesProps) => {
  const state = useSelector((state:RootState) => state.favorite)
  logger.info(state)
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <CardList 
        data={state.fav_photos}
      />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {}
});
