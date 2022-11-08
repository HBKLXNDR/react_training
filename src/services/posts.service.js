import {urls} from "../config";
import {axiosService} from "./axios.service";

const postsService = {
    getAll: (id) => axiosService.get(`${urls.posts}/${id}`)
};

export {
    postsService
}