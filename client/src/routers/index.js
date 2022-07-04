import config from '~/config';
import DefaultLayout from '~/layout/defaultLayout';
import Home from '~/page/home';
import Login from '~/page/login';
import NotFound from '~/page/notFound/NotFound';
import Register from '~/page/register';
import TestComponent from '~/page/test';

const publicRouters = [
  {
    path: config.router.home,
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: config.router.login,
    component: Login,
    layout: null,
  },
  {
    path: config.router.register,
    component: Register,
    layout: null,
  },
  {
    path: config.router.test,
    requireLogin: true,
    component: TestComponent,
    layout: DefaultLayout,
  },
  {
    path: '*',
    component: NotFound,
    layout: null,
  },
];

// nếu không có layout thì để null

const privateRouters = [];

export { publicRouters, privateRouters };
