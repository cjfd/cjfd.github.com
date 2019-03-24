import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
import "babel-polyfill";
//use v-charts
import VeLine from 'v-charts/lib/line';
import VeMap from 'v-charts/lib/map';
import VeHistogram from 'v-charts/lib/histogram';
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import store from './vuex/store'
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.use(Vuex)
Vue.use(VueResource)
Vue.component(VeLine.name, VeLine);
Vue.component(VeMap.name,VeMap)
Vue.component(VeHistogram.name,VeHistogram)
// charts end
Vue.use(ElementUI, { size: 'small' });
Vue.prototype.$axios = axios;

//使用钩子函数对路由进行权限跳转
// router.beforeEach((to, from, next) => {
//     const role = localStorage.getItem('ms_username');
//     if(!role && to.path !== '/login'){
//         next('/login');
//     }else if(to.meta.permission){
//         // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
//         role === 'admin' ? next() : next('/403');
//     }else{
//         // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
//         if(navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor'){
//             Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
//                 confirmButtonText: '确定'
//             });
//         }else{
//             next();
//         }
//     }
// })
// 全局导航钩子
router.beforeEach((to, from, next) => {

    if (to.meta.requireAuth) {

        // console.log(isEmptyObject(store.state.user))
        if(!isEmptyObject(store.state.user)) {
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})
//判断object是否为空
function isEmptyObject(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}





new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
