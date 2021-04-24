import {createRouter, createWebHashHistory} from "vue-router";
import HomePage from "./Pages/Home.vue";
import UsersPage from "./Pages/Users.vue";
import TeamsPage from "./Pages/Teams.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/users', component: UsersPage },
        { path: '/teams', component: TeamsPage },
    ]
})

export { router }