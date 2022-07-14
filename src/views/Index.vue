<template>
  <div>
    <el-row class="mb-4">
      <el-button @click="loginOut">退出</el-button>
    </el-row>
  </div>
</template>
<script setup>
import {useStore} from "vuex";
import {useRouter} from "vue-router";

const router = useRouter();
const store = useStore();
const loginOut = () => {
  localStorage.removeItem("loginData")
  store.commit("setUserInfo", {})
  router.push({
    path: "/login"
  })
}
</script>
