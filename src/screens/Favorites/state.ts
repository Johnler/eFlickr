import { IState } from './types';


const initialState = (): IState => {
    const fav_photos = undefined

    return {
        screen: 'Favorites',
        fav_photos,
    };
};
// * *  Add state key here to blacklist persistent.
const unPeristState = ['screen'];


export {initialState, unPeristState};


