import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import store from "../store/index.js"

const index = [
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
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../views/test.vue'),
        meta: {
            title: 'test'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: index
})

//路由守卫
router.beforeEach((to, from, next) => {
    //to:从哪个页面
    //from:到哪个页面
    //next:跳转
    //判断用户是否登陆
    //获取vuex中的token信息
    const uInfo = store.state.uInfo.userInfo
    if (!uInfo.username) {
        ///解决死循环
        if (to.path === '/login') {
            next()
            return
        }
        //如果没有登陆，跳转到登陆页面
        next('/login')
    } else {
        //如果已经登陆，跳转到下一页
        next()
    }
})
export default router
