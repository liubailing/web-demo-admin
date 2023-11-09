/* eslint-disable import/no-anonymous-default-export */
import { CrownFilled, TabletFilled } from '@ant-design/icons'
import Icon from '../icon'

export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/welcome',
        name: '欢迎',
        icon: <Icon name="#icon-octopus"></Icon>,
        component: './Welcome',
      },
      {
        path: '/admin',
        name: '管理页',
        icon: <CrownFilled rev={undefined} />,
        access: 'canAdmin',
        component: './Admin',
        routes: [
          {
            path: '/module',
            name: '一级页面',
            component: './Welcome',
          },
          {
            path: '/module2',
            name: '二级页面',
            component: './Welcome',
          },
          {
            path: '/module2/test',
            name: '三级页面',
            component: './Welcome',
          },
        ],
      },
      {
        name: '列表页',
        icon: <TabletFilled rev={undefined} />,
        path: '/list',
        component: './ListTableList',
        routes: [
          {
            path: '/list/sub-page2',
            name: '二级列表页面',
            component: './Welcome',
          },
          {
            path: '/list/sub-page3',
            name: '三级列表页面',
            component: './Welcome',
          },
        ],
      },
    ],
  },
  location: {
    pathname: '/',
  },
}
