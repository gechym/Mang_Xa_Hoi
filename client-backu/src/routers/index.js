import Home from '~/page/Home';
import Profile from '~/page/Profile';
import config from '~/config';
import Watch from '~/page/watch';
import Group from '~/page/Group';
import Marketplace from '~/page/Marketplace';
import { OnlyHeaderLayput } from '~/layouts';

const publicRouters = [
  { path: config.router.home, component: Home },
  { path: config.router.profire, component: Profile, layout: OnlyHeaderLayput },
  { path: config.router.watch, component: Watch, layout: OnlyHeaderLayput },
  { path: config.router.groups, component: Group, layout: OnlyHeaderLayput },
  { path: config.router.marketplace, component: Marketplace, layout: OnlyHeaderLayput },
];

const privateRouters = [];

export { publicRouters, privateRouters };
