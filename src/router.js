import {createRouter, createWebHistory} from "vue-router";
import HomePage from "./pages/HomePage.vue";
import UserProfile from "./pages/UserProfile.vue";
import RegisterPage from "./pages/RegisterPage.vue";

const routes = [
    {
        path: "/", 
        name: "home",
        component: HomePage,
        meta:{
            requiresAuth: true,
        }
    },
    {
        path: "/user/:username",
        name: "userProfile",
        component: UserProfile,
        meta:{
            requiresAuth: true,
        }
    },
    {
        path: "/register",
        name: "register",
        component: RegisterPage
    }
];

const router = createRouter({
    routes, //on est pas obligé de mettre routes : routes car les variables ont le même nom
    history: createWebHistory() // on a besoin de cette méthode pour que les routes puissent fonctionner.
});

router.beforeEach((to,_/*on peut mettre un underscore à la place d'un from*/,next)=>{
    const userToken = JSON.parse(localStorage.getItem("userData"))?.token;
    if(userToken){
        return next();
    }
    if(to.meta.requiresAuth){
        return next("/register")
    }
    next();
})

export default router; //l'export permet ensuite de pouvoir l'importer dans un autre fichier.