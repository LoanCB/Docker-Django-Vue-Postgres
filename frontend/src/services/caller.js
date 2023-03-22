import axios from 'axios'

const Axios = axios.create({
    baseURL: 'https://localhost:8000/'
})

export default Axios