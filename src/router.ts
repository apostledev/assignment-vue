import {createRouter, createWebHashHistory} from "vue-router";
import HomePage from "./Pages/Home.vue";
import UsersPage from "./Pages/Users.vue";
import TeamIndexPage from "./Pages/Teams/Index.vue";
import TeamCreatePage from "./Pages/Teams/Create.vue";
import TeamEditPage from "./Pages/Teams/Edit.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/users', component: UsersPage },
        { path: '/teams', component: TeamIndexPage },
        { path: '/teams/create', component: TeamCreatePage },
        { path: '/teams/:id', component: TeamEditPage },
    ]
})

export { router }