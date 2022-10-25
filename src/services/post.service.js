import {axiosService} from "./axios.service";
import {urls} from "../configs";

const postService = {
    getPosts: (userId) => axiosService.get(`${urls.posts}/?userId=${userId}`)
}

export {postService}