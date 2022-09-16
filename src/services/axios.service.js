import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users"
});

const getUsersAxios = () => axiosInstance.get()

const getUserDetailsAxios = (id)=> axiosInstance.get(`${id}`)

export {getUserDetailsAxios, getUsersAxios}
