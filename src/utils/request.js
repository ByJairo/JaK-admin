import {post, get} from './service.js';
//登陆接口
export const loginApi = data => {
    return post({
        //这里填写登陆接口地址
        url: '/users/login', data
    }).then(res => {
        if (res.status === 200) {
            //登陆成功后，将token保存到localStorage中
            localStorage.setItem('token', res.data.token);
            //router不能用只能用原生写法跳转
            window.location.href = '/admin';

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
