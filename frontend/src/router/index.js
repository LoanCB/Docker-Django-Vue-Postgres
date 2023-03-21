import {createRouter, createWebHistory} from "vue-router"
import * as Public from "@/views/public"
import * as Private from "@/views/private"

const routes = [
    {
        path: '/',
        name: 'private',
        component: Private.PrivateLayout,
        children: [
            {path: 'home', name: 'home', component: Private.Home, alias: '/'}
        ]
    },
    {
        path: '/',
        name: 'public',
        component: Public.PublicLayout,
        children: [
            {path: 'login', name: 'login', component: Public.Login}
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router