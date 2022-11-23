import {axiosService} from "./axios.service";

import {urls} from "../configs";

const todosService = {
    getAll: () => axiosService.get(urls.todos),
    getById: (id) => axiosService.get(`${urls.todos}/${id}`)
}

export {todosService};