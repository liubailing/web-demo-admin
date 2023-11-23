/* eslint-disable import/no-anonymous-default-export */
import Icon from '../icon'

const routes = {
  route: {
    path: '/',
    routes: [
      {
        path: '/welcome',
        name: '欢迎',
        icon: <Icon name="#icon-king"></Icon>,
        component: './test',
      },
      {
        path: '/test',
        name: '管理页',
        icon: <Icon name="#icon-team-1"></Icon>,
        access: 'canAdmin',
        component: './test',
        routes: [
          {
            path: '/test',
            name: '一级页面',
            component: './test',
          },
          {
            path: '/test/module',
            name: '二级页面',
            component: './test',
          },
        ],
      },
      {
        name: '列表页',
        icon: <Icon name="#icon-dialogue"></Icon>,
        path: '/test2',
        component: './test2',
        routes: [
          {
            path: '/test/list',
            name: '一级测试页面',
            component: './test2',
          },
          {
            path: '/test/module',
            name: '二级测试页面',
            component: './test2',
          },
        ],
      },
    ],
  },
  location: {
    pathname: '/',
  },
}

export default routes
