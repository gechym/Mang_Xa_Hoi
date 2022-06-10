import Home from '~/page/Home';
import Following from '~/page/Following';
import Profile from '~/page/Profile';
import upload from '~/page/upload';
import { OnlyHeaderLayput } from '~/layouts';
import config from '~/config';

const publicRouters = [
    { path: config.router.home, component: Home },
    { path: config.router.following, component: Following },
    { path: config.router.profire, component: Profile },
    { path: config.router.upload, component: upload, layout: OnlyHeaderLayput },
];

const privateRouters = [];

export { publicRouters, privateRouters };
