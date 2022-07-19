import {createStore} from "vuex";
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    // namespaced: true,
//同步修改state内的值
    state: {
        //TODO:需要加密存储全局中的TOKEN然后解密后和localStorage中的token进行比较
        token: '',
    },
    mutations: {
        setToken(state, data) {
            this.state.token = data
        }
    },
    actions: {
        setToken({commit}, data) {
            context.commit('setToken', data)
        }
    },
    plugins: [createPersistedState()]
    //异步修改数据
})
//检测登录状态
