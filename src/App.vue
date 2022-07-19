<template>
  <div id="app" v-wechat-title=router.currentRoute.value.meta.title>
    <router-view></router-view>
  </div>
</template>
<script setup>
import router from "./router";
import store from "./store";
//路由守卫安全性加强版本
//TODO: 需要解密加密的全局token进行比对
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
</script>
