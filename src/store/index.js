import {createStore} from "vuex";

export default createStore({
    namespaced: true,
//同步修改state内的值
    state: {
        token: '',
    },
    mutations: {
        setToken(state, data) {
            state.token = data
        }
    },
    actions: {
        setToken({commit}, data) {
            context.commit('setToken', data)
        }
    }
    //异步修改数据
})
//检测登录状态
