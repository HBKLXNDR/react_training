import {urls} from "../config";
import {axiosService} from "./axios.service";

const commentsService = {
    getAll: () => axiosService.get(urls.comments)
};

export {
    commentsService
};