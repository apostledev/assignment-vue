import {createRouter, createWebHashHistory} from "vue-router";
import HomePage from "./Pages/Home.vue";
import UsersPage from "./Pages/Users.vue";
import TeamIndexPage from "./Pages/Teams/Index.vue";
import TeamCreatePage from "./Pages/Teams/Create.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/users', component: UsersPage },
        { path: '/teams', component: TeamIndexPage },
        { path: '/teams/create', component: TeamCreatePage },
    ]
})

export { router }