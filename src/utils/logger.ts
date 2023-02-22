import {Platform} from 'react-native';
export const logger = {
    info: (...message:any) => {
        console.log(`[${Platform.OS}]: `)
        console.log("%c 🍏 [INFO]:", "color:#b03734", ...message);
    },
    error: (...message: any) => {
        console.log(`[${Platform.OS}]: `)
        console.log("%c 🍅 [ERROR]:", "color:#b03734", ...message);
    }
}