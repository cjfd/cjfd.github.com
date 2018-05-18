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


export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: home,
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: dashboard,
                    meta: { title: '系统首页' }
                },
                {
                    path: '/table',
                    component: table,
                    meta: { title: '基础表格' }
                },
                {
                    path: '/tabs',
                    component: tab,
                    meta: { title: 'tab选项卡' }
                },
                {
                    path: '/form',
                    component: form,
                    meta: { title: '基本表单' }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: editor,
                    meta: { title: '富文本编辑器' }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: markdown,
                    meta: { title: 'markdown编辑器' }
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: upload,
                    meta: { title: '文件上传' }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: drag,
                    meta: { title: '拖拽列表' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: permission,
                    meta: { title: '权限测试', permission: true }
                }
            ]
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/404',
            component: error404
        },
        {
            path: '/403',
            component: error403
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
