import {post, get} from './service.js';
//登陆接口
export const loginApi = data => {
    return post({
        url: '/users/login',
        data
    }).catch(err => {
        if (err.response.status === 404) {
            alert('用户名或密码错误')
        } else if (err.response.status === 503) {
            alert('接口维护')
        }
    })
}
