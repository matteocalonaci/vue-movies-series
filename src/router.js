import { createRouter, createWebHistory } from "vue-router";

import AppHome from './views/AppHome.vue';
import AppAbout from "./views/AppAbout.vue";
import AppContact from "./views/AppContact.vue";
import AppMovies from "./views/AppMovies.vue";
import AppSeries from "./views/AppSeries.vue";
import Single_Movie from "./views/Single_Movie.vue";
import Single_Serie from "./views/Single_Serie.vue";
import AppSerie from "./views/AppSerie.vue";
import AppMovie from "./views/AppMovie.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: "home",
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout,
        },
        {
            path: "/contact",
            name: "contact",
            component: AppContact
        },
        {
            path: "/movies",
            name: "movies",
            component: AppMovies
        },
        {
            path: "/series",
            name: "series",
            component: AppSeries
        },
        {
            path: "/singleMovie",
            name: "singleMovie",
            component: Single_Movie
        },
        {
            path: '/serie/:id?',
            name: "serie",
            component: AppSerie
        },
        {
            path: '/movie/:id?',
            name: "movie",
            component: AppMovie
        }

    ]
})
export { router };