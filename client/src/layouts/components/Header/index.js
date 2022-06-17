import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import style from './header.module.scss';
import {
  LogoHeader,
  HomeIcon,
  HomeIconActive,
  TiviIcon,
  TiviIconActice,
  IconMarket,
  IconMarketActive,
  IconGroup,
  IconGroupActive,
  IconMenu,
  IconBell,
  IconMessage,
  IconDropDown,
} from '~/Components/icons';
import config from '~/config';
import Search from '../Search';
import Button from '~/Components/Button';
import BtnIcon from '~/Components/BtnIcon/BtnIcon';
import Image from '~/Components/Image';

const cx = classNames.bind(style);

function Header() {
  const { pathname } = useLocation();

  return (
    <header className={`header ${cx('header')}`}>
      <div className={cx('wrapper-menu-left')}>
        <Link to={config.router.home} className={cx('logo-header')}>
          <LogoHeader width="4.8rem" height="4.8rem" />
        </Link>
        <Search />
      </div>

      <div className={cx('wrapper-icon')}>
        <Button
          to={config.router.home}
          className={cx('icon', { active: pathname === config.router.home })}
          small
        >
          {pathname === config.router.home ? (
            <HomeIconActive width="3.1rem" height="3.1rem" />
          ) : (
            <HomeIcon width="3.1rem" height="3.1rem" />
          )}
        </Button>
        <Button
          to={config.router.watch}
          className={cx('icon', { active: pathname === config.router.watch })}
          small
        >
          {pathname === config.router.watch ? (
            <TiviIconActice width="3.1rem" height="3.1rem" />
          ) : (
            <TiviIcon width="3.1rem" height="3.1rem" />
          )}
        </Button>
        <Button
          to={config.router.marketplace}
          className={cx('icon', { active: pathname === config.router.marketplace })}
          small
        >
          {pathname === config.router.marketplace ? (
            <IconMarketActive width="3.1rem" height="3.1rem" />
          ) : (
            <IconMarket width="3.1rem" height="3.1rem" />
          )}
        </Button>
        <Button
          to={config.router.groups}
          className={cx('icon', { active: pathname === config.router.groups })}
          small
        >
          {pathname === config.router.groups ? (
            <IconGroupActive width="3.1rem" height="3.1rem" />
          ) : (
            <IconGroup width="3.1rem" height="3.1rem" />
          )}
        </Button>
      </div>

      <div className={cx('wrapper-menu-right')}>
        <Link to={`/@Nguyễn Đức Bảo`}>
          <BtnIcon text={'Nguyễn Đức Bảo'} label={'Đức Bảo'} menu>
            <Image
              className={cx('avt-user')}
              src="https://yt3.ggpht.com/9Kp_2gDXmIU3VT_h0VTUoQZC5jCRn22TDt0lDs_BS8PLOfIYgY8w-m3zn7VjTVJdQoNfQbC5=s88-c-k-c0x00ffffff-no-rj-mo"
            />
          </BtnIcon>
        </Link>

        <BtnIcon text="Menu">
          <IconMenu width="2rem" height="2rem" />
        </BtnIcon>

        <BtnIcon text="Thông báo">
          <IconBell width="2rem" height="2rem" />
        </BtnIcon>

        <BtnIcon text="Tin nhắn">
          <IconMessage width="2rem" height="2rem" />
        </BtnIcon>

        <BtnIcon text="Trang cá nhân">
          <IconDropDown width="2rem" height="2rem" />
        </BtnIcon>
      </div>
    </header>
  );
}

export default Header;
