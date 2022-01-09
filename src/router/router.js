import {createRouter, createWebHistory} from "vue-router";
import signIn from "@/components/registration/signIn";
import signUp from "@/components/registration/signUp";
import Main from "@/components/Main";

const routes = [
    {
        path: '/',
        component: Main

    },
    {
        path: '/sign-in',
        component: signIn
    },
    {
        path: '/sign-up',
        component: signUp
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;