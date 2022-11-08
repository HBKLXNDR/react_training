import {urls} from "../config";
import {axiosService} from "./axios.service";

const albumsService = {
    getAll: () => axiosService.get(urls.albums)
}

export {albumsService}