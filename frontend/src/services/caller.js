import axios from 'axios'

const Axios = axios.create({
    baseURL: 'http://localhost:8000/api/'
})

Axios.interceptors.request.use(request => {
    const token = localStorage.getItem('access_token')

    if (token)
        request.headers.Authorization = 'Bearer ' + token

    return request
})

export default Axios