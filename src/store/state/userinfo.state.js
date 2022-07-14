export default {
    state: {
        //判断用户是否登陆localStorage的数据存不存在
        userInfo: (localStorage.getItem("loginData") && JSON.parse(localStorage.getItem("loginData"))) || {}
    },
    mutations: {
        setUserInfo(state, uInfo) {
            state.userInfo = uInfo
        }
    }
}
