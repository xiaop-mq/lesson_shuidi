import React from 'react';
import IndexRoute from './IndexRoute';
import Home from './pages/home/index';
import Login from './pages/login/index';
// IndexRoute 全局组件，无论加载哪个路由，都会加载 IndexRoute
// /  可以包含 所有路由   
// /home
// /home/id
export default [
  {
    path: '/',
    component: IndexRoute,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/login',     
        component: Login
      }
    ]
  }
]