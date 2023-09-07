export const constantRoute = [
  {
    path: '/login', //登录页面
    component: () => import('@/views/login/index.vue'),
    name: 'Login', //命名路由
    meta: {
      title: '登录',
      hidden: true, //在菜单中是否隐藏
    },
  },
  {
    path: '/', //主页
    component: () => import('@/layout/index.vue'), //外面包了一层，页面主要展示菜单栏，在其中一部分区域展示children的内容
    name: 'Layout',
    meta: {
      title: '',
      icon: '',
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/error/index.vue'),
    name: '404', //命名路由
    meta: {
      title: '404',
      hidden: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any', //命名路由
    meta: {
      title: '任意路由',
      hidden: true,
    },
  },
]
