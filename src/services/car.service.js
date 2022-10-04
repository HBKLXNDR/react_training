import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const carService = {
    getAll:()=>axiosInstance.get(urls.cars),
    deleteOneById:(id)=>axiosInstance.delete(`${urls.cars}/${id}`),
    getById:(id)=>axiosInstance.get(`${urls.cars}/${id}`),
    updateById:(id,car)=>axiosInstance.put(`${urls.cars}/${id}`,car),
    create:(car)=>axiosInstance.post(`${urls.cars}`, car)
}

export {carService}