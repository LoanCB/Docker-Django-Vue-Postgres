import router from "@/router"
import axios from "axios"

export const api = {
    login: credentials => axios.post('api/token/', credentials),
    saveToken: (access, refresh) => {
        localStorage.setItem('access_token', access)
        localStorage.setItem('refresh_token', refresh)
    },
    logout: () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        router.push({name: 'login', query: {next: ''}})
    }
}