import Home from '~/page/Home';
import Profile from '~/page/Profile';
import config from '~/config';
import { OnlyHeaderLayput } from '~/layouts';

const publicRouters = [
  { path: config.router.home, component: Home },
  { path: config.router.profire, component: Profile, layout: OnlyHeaderLayput },
];

const privateRouters = [];

export { publicRouters, privateRouters };
