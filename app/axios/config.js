import { AxiosInstance } from "axios";


const axios = AxiosInstance.create({
    baseURL:'http://localhost',
    timeOut:30000,
})

export default axios