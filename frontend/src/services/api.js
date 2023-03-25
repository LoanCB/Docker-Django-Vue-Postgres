import router from "@/router"
import Axios from "./caller";

export const api = {
    login: credentials => Axios.post('token/', credentials),
    saveToken: (access, refresh) => {
        localStorage.setItem('access_token', access)
        localStorage.setItem('refresh_token', refresh)
    },
    logout: (redirect = true) => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        if (redirect) {
            router.push({name: 'login', query: {next: window.location.pathname}})
        } else {
            router.push({name: 'login'})
        }
    },
    protected: () => Axios.get('protected/')
}