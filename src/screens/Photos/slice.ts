import { createSlice } from '@reduxjs/toolkit'
import { initialState, unPeristState } from './state'
import { persistReducer } from 'redux-persist';
import { getPersistConfig } from 'redux-deep-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

//persistent Config

export const slice = createSlice({
    name: 'photo',
    initialState,
    reducers: {
        setPhoto: (state,actions) => {
            state.photos = actions.payload
        },
        setFetch: (state, actions) => {
            state.fetching = actions.payload
        }
    }
})
const persistHomeSliceConfig = getPersistConfig({
    key: 'photo',
    storage: AsyncStorage, // * * storage use for this slice.
    blacklist: unPeristState,
    rootReducer: slice.reducer
  })


const homeSlice = persistReducer(persistHomeSliceConfig, slice.reducer)

export const actions = slice.actions

export default homeSlice
