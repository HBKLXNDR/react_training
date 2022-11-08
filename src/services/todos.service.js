import {urls} from "../config";
import {axiosService} from "./axios.service";

const todosService = {
    getAll: () => axiosService.get(urls.todos)
};

export {
    todosService
};