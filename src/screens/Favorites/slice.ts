import { createSlice } from '@reduxjs/toolkit'
import { initialState, unPeristState } from './state'
import { persistReducer } from 'redux-persist';
import { getPersistConfig } from 'redux-deep-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

//persistent Config

export const slice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavorite: (state, actions) => {
            if(!state.fav_photos?.length) {
                state.fav_photos = [actions.payload];;
                return;
            }
            state.fav_photos = [...state.fav_photos, actions.payload]
        },
    }
})
const persistHomeSliceConfig = getPersistConfig({
    key: 'favorite',
    storage: AsyncStorage, // * * storage use for this slice.
    blacklist: unPeristState,
    rootReducer: slice.reducer
  })


const homeSlice = persistReducer(persistHomeSliceConfig, slice.reducer)

export const actions = slice.actions

export default homeSlice
