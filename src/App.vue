<template>
  <div id="app" v-wechat-title=router.currentRoute.value.meta.title>
    <router-view></router-view>
  </div>
</template>
<script setup>
import router from "./router";
</script>
