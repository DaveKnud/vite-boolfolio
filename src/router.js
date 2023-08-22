import { createRouter, createWebHistory } from 'vue-router';
import AppDetails from './pagine/AppDetails.vue';
import AppHome from './pagine/AppHome.vue';
import NotFound from './pagine/NotFound.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/details',
            name: 'details',
            component: AppDetails
        },

        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        },

    ]
});
export { router };