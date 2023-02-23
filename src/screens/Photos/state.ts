import { IState } from './types';


const initialState = (): IState => {
    const fetching = false;
    const photos = {
        page: 0,
        pages: 0,
        perpage: 0,
        photo: []

    };

    return {
        screen: 'Photo',
        photos,
        fetching
    };
};
// * *  Add state key here to blacklist persistent.
const unPeristState = ['screen'];


export {initialState, unPeristState};


