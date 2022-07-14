import {createStore} from "vuex";
import uInfo from "./state/userinfo.state.js";

export default createStore({
    //全局状态初始值
    //模块
    modules: {uInfo}

});
