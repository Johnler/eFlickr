import Axios from "axios";
import { logger } from "./logger";
import { FLICKR_API_KEY } from "../../KEYS";

const URL:string = `https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=${FLICKR_API_KEY}&user_id=65789667%40N06&extras=url_m%2Cowner_name&format=json&nojsoncallback=1`

const http = Axios.create({
    baseURL: URL
})


const AxiosGet = async(url: string) => {
    try {
        const response = await http.get(url)
        return response;
    } catch (error: any) {
        logger.error(error)
    }
}



export { AxiosGet }