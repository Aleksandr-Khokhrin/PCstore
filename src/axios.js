import axios from "axios";

const instance = axios.create({
    baseURL: 'http://31.129.110.46:8000/api/v1'
})


instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token')
    return config 
}) 

export default instance;