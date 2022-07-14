import axios from 'axios';
import {ElLoading, ElMessage} from "element-plus";
//使用axios的create创建实例
const service = axios.create({
    //解决跨域问题,在vite.config.js中配置基准地址
    baseURL: '/api',
    timeout: 5000,
    //请求头
    headers: {
        //请求头数据类型
        // 'Content-Type': 'application/json;charset=UTF-8'
    }
});
//请求拦截器
service.interceptors.request.use(config => {
    return config;
})
//请求响应拦截器
service.interceptors.response.use(response => {
    const data = response.data;
    return response.data;
})
//post请求
export const post = config => {
    return service({
        ...config,
        method: 'post',
        data: config.data
    })
}
//get请求
export const get = config => {
    return service({
        ...config,
        method: 'get',
        data: config.data
    })
}
// /admin/sys/login?username=${this.userLoginVo.username}&password=${this.userLoginVo.password}
