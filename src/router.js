import {createRouter, createWebHistory} from "vue-router";
import HomePage from "./pages/HomePage.vue";
import UserProfile from "./pages/UserProfile.vue";

const routes = [
    {
        path: "/", 
        name: "home",
        component: HomePage
    },
    {
        path: "/user/:username",
        name: "userProfile",
        component: UserProfile
    }
];

const router = createRouter({
    routes, //on est pas obligé de mettre routes : routes car les variables ont le même nom
    history: createWebHistory() // on a besoin de cette méthode pour que les routes puissent fonctionner.
});

export default router; //l'export permet ensuite de pouvoir l'importer dans un autre fichier.