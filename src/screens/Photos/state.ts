import { IState } from './types'


const initialState = (): IState => {

    const photos = {
        page: 0,
        pages: 0,
        perpage: 0,
        photo: []

    }

    return {
        screen: 'Photo',
        photos
    }
}
// * *  Add state key here to blacklist persistent.
const unPeristState = ['screen']


export {initialState, unPeristState};


