# Vue3.2+Vite+Vuex后台通用框架后续更新Pina切换至ts版本

By Jairo<br/>
开源项目不提供技术支持,如有问题自行解决

## 关于

内置大量的注释善用搜索快速直达<br/>
使用vuex管理状态,vite提供编译器,vue-router路由,vite快速启动<br/>
vuex存储全局登陆状态,路由守卫确保无法在未登录状态访问其他页面<br/>

## 配置环境

一键安装 <code>npm i</code><br/>

技术插件

- vue-router: 路由功能以及路由守卫<br/>
- vuex: 全局状态管理<br/>
- axios: 封装的http请求<br/>

UI支持

- element-ui: 基于vue的UI框架<br/>
- Navie-ui: 基于vue的UI框架<br/>
- vuetify: 基于vue的UI框架<br/>
- vuesax: 基于vue的UI框架<br/>

## 如何使用

- 使用axios封装接口
- 你需要修改的内容为src/utils/service.js中baseURL的基准URL
- 注意为了解决跨域问题你需要在vite.config.js中配置server/proxy
- 如果你需要封装新的接口可以在src/utils中新建一个js接口文件然后引入封装好的post和get方法
- <code>import {post, get} from './service.js'</code>
- 然后创建你的方法向外暴露即可

## 更新日志

- 0.0.1:
    - 2022年7月14日
    - 初始版本
