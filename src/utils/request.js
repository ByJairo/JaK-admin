import {post, get} from './service.js';
import store from "../store";
import router from "../router";
//登陆接口
export const loginApi = data => {
    return post({
        //这里填写登陆接口地址
        url: '/users/login', data
    }).then(res => {
        if (res.status === 200) {
            //登陆成功后，将token保存到localStorage中
            localStorage.setItem('token', res.data.token);
            //将token保存到vuex中
            store.commit('setToken', res.data.token);
            //跳转到首页
            router.push('/admin')
        }
    }).catch(err => {
        alert('傻逼后端接口死掉了');
    })
}
//注册接口
export const registerApi = data => {
    return post({
        //这里填写注册接口地址
        url: '/users/login', data
    }).then(res => {
        return res.data
    })
}
