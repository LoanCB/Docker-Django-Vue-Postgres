import axios from 'axios'
import {api} from "@/services/api";

const Axios = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        "Content-Type": "application/json",
    },
})

Axios.interceptors.request.use(request => {
    const token = localStorage.getItem('access_token')

    if (token)
        request.headers.Authorization = 'Bearer ' + token

    return request
})

let refresh = false

Axios.interceptors.response.use(response => response, async error => {
    if (error.response.status === 401 && !refresh) {
        refresh = true
        const response = await Axios.post('token/refresh/', {refresh: localStorage.getItem('refresh_token')})

        if (response.status === 200) {
            localStorage.setItem('access_token', response.data.access)
            return Axios(error.config)
        }

        api.logout()
    }
    refresh = false
    return error
})

export default Axios