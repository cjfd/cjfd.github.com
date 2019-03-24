import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
// 路由懒加载
const home = resolve => require(['../components/common/Home.vue'], resolve)
const dashboard = resolve => require(['../components/page/Dashboard.vue'], resolve)
const table = resolve => require(['../components/page/BaseTable.vue'], resolve)
const tab = resolve => require(['../components/page/Tabs.vue'], resolve)
const form = resolve => require(['../components/page/BaseForm.vue'], resolve)
const editor = resolve => require(['../components/page/VueEditor.vue'], resolve)
const markdown = resolve => require(['../components/page/Markdown.vue'], resolve)
const upload = resolve => require(['../components/page/Upload.vue'], resolve)
const drag = resolve => require(['../components/page/DragList.vue'], resolve)
const permission = resolve => require(['../components/page/Permission.vue'], resolve)
const login = resolve => require(['../components/page/Login.vue'], resolve)
const error404 = resolve => require(['../components/page/404.vue'], resolve)
const error403 = resolve => require(['../components/page/403.vue'], resolve)
const identity_verify = resolve => require(['../components/page/Identity_verify.vue'],resolve)
const fund_application = resolve => require(['../components/page/Fund_application.vue'],resolve)
const c_identity_perfect = resolve => require(['../components/page/C_identity_perfect.vue'],resolve)
const c_identity_check = resolve => require(['../components/page/C_identity_check.vue'],resolve)
const c_money_check = resolve => require(['../components/page/C_money_check.vue'],resolve)
const c_poor_people = resolve => require(['../components/page/C_poor_people.vue'],resolve)
const s_identity_check = resolve => require(['../components/page/S_identity_check.vue'],resolve)
const s_money_apply = resolve => require(['../components/page/S_money_apply.vue'],resolve)

export default new Router({
    mode: 'history',  //把Router的mode修改为history模式,VueRouter默认的模式为HASH模式
    routes: [
        // {
        //     path: '/',
        //     name: '首页',
        //     redirect: '/dashboard'
        // },
        {
            path: '',
            component: home,
            // name: 'home',
            // meta: { title: 'home' },
            redirect: 'login',
            children: [
                {
                    path: '/dashboard',
                    component: dashboard,
                    name: 'dashboard',
                    meta: {
                        title: '系统首页',
                        requireAuth:true
                    }

                },
                {
                    path: '/table',
                    component: table,
                    name: 'table',
                    meta: {
                        title: '基础表格',
                        requireAuth:true
                    }
                },
                {
                    path: '/tabs',
                    component: tab,
                    name: 'tab',
                    meta: {
                        title: 'tab选项卡',
                        requireAuth:true
                    }
                },
                {
                    path: '/form',
                    component: form,
                    name: 'form',
                    meta: {
                        title: '基本表单',
                        requireAuth:true
                    }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: editor,
                    name: 'editor',
                    meta: {
                        title: '富文本编辑器',
                        requireAuth:true
                    }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: markdown,
                    name: 'markdown',
                    meta: {
                        title: 'markdown编辑器',
                        requireAuth:true
                    }
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: upload,
                    name: 'upload',
                    meta: {
                        title: '文件上传',
                        requireAuth:true
                    }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: drag,
                    name: 'drag',
                    meta: {
                        title: '拖拽列表',
                        requireAuth:true
                    }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: permission,
                    name: 'permission',
                    meta: {
                        title: '权限测试',
                        requireAuth: true
                    }
                },
                {
                    // 身份审核
                    path: '/identity_verify',
                    component: identity_verify,
                    name: 'identity_verify',
                    meta: {
                        title: '身份审核',
                        requireAuth: true
                    }
                },
                {
                    //资金申请
                    path: '/fund_application',
                    component: fund_application,
                    name: 'fund_application',
                    meta: {
                        title: '资金申请',
                        requireAuth: true
                    }
                },
                {
                    //身份完善
                    path: '/c_identity_perfect',
                    component: c_identity_perfect,
                    name: 'c_identity_perfect',
                    meta: {
                        title: '身份完善',
                        requireAuth: true
                    }
                },
                {
                    //身份审核
                    path: '/c_identity_check',
                    component: c_identity_check,
                    name: 'c_identity_check',
                    meta: {
                        title: '身份审核',
                        requireAuth: true
                    }
                },
                {
                    //资金审批
                    path: '/c_money_check',
                    component: c_money_check,
                    name: 'c_money_check',
                    meta: {
                        title: '资金审批',
                        requireAuth: true
                    }
                },
                {
                    //贫困人员
                    path: '/c_poor_people',
                    component: c_poor_people,
                    name: 'c_poor_people',
                    meta: {
                        title: '贫困人员',
                        requireAuth: true
                    }
                },
                {
                    //身份审核记录
                    path: '/s_identity_check',
                    component: s_identity_check,
                    name: 's_identity_check',
                    meta: {
                        title: '身份审核记录',
                        requireAuth: true
                    }
                },
                {
                    //资金申请记录
                    path: '/s_money_apply',
                    component: s_money_apply,
                    name: 's_money_apply',
                    meta: {
                        title: '资金申请记录',
                        requireAuth: true
                    }
                }
            ]
        },
       
        {
            path: '/login',
            component: login,
            name: 'login',
        },
        {
            path: '/404',
            component: error404,
            name: 'error404',
        },
        {
            path: '/403',
            component: error403,
            name: 'error403',
        },
        {
            path: '*',
            redirect: '/404',
            name: '404',
        }
    ]
})
