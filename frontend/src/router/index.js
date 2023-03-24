import {createRouter, createWebHistory} from "vue-router"
import * as Public from "@/views/public"
import * as Private from "@/views/private"
import NotFound from "@/views/NotFound.vue";

const routes = [
    {
        path: '/',
        name: 'private',
        component: Private.PrivateLayout,
        children: [
            {path: 'home', name: 'home', component: Private.Home, alias: '/'},
            {path: 'protected', name: 'protected', component: Private.Protected},
        ]
    },
    {
        path: '/',
        name: 'public',
        component: Public.PublicLayout,
        children: [
            {path: 'login', name: 'login', component: Public.Login}
        ]
    },
    {path: "/:pathMatch(.*)*", name: 'not-found', component: NotFound},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched[0].name === 'private')
        // Redirect to login page when access token doesn't exist in local storage
        if (!localStorage.getItem('access_token'))
            router.push({name: 'login', query: {next: to.path}})
    next()
})

export default router