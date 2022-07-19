<template>
  <div>
    <el-row class="mb-4">
      <el-button @click="loginOut">退出</el-button>
    </el-row>
  </div>
</template>
<script setup>
import router from "../router";

const loginOut = () => {
  localStorage.removeItem("token")
  router.push('/login')
}
</script>
