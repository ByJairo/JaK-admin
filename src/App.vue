<template>
  <div id="app" v-wechat-title=router.currentRoute.value.meta.title>
    <router-view></router-view>
  </div>
</template>
<script setup>
import router from "./router";
import store from "./store";
//路由守卫安全性加强版本
router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    if (store.state.token === localStorage.getItem("token")) {
      alert('已经登录准备跳转')
      next('/admin')
    } else {
      next()
      return
    }
  } else {
    if (store.state.token === localStorage.getItem("token")) {
      next()
    } else {
      alert('登录失效')
      next({
        path: "/login"
      })
    }
  }
})
</script>
