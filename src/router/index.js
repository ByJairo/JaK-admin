import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import store from "../store/index.js"

const index = [
    {
        path: '/',
        name: 'index',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue'),
        meta: {
            title: '登陆'
        }
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('../views/Index.vue'),
        meta: {
            title: '首页'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: index
})
//路由守卫
router.beforeEach((to, from, next) => {
    if (to.path === "/login") {
        if (store.state.token === localStorage.getItem("token")) {
            next('/admin');
        } else {
            next()
        }
    } else {
        if (store.state.token === localStorage.getItem("token")) {
            next()
        } else {
            next({
                path: "/login"
            })
        }
    }
})
export default router
