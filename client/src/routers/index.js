import Home from '~/page/Home';
import Profile from '~/page/Profile';
import config from '~/config';

const publicRouters = [
  { path: config.router.home, component: Home },
  { path: config.router.profire, component: Profile },
];

const privateRouters = [];

export { publicRouters, privateRouters };
