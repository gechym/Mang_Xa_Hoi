import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import style from './header.module.scss';
import {
  LogoHeader,
  HomeIcon,
  TiviIcon,
  IconMarket,
  IconGroup,
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
          <HomeIcon width="3.1rem" height="3.1rem" />
        </Button>
        <Button
          to={config.router.watch}
          className={cx('icon', { active: pathname === config.router.watch })}
          small
        >
          <TiviIcon width="3.1rem" height="3.1rem" />
        </Button>
        <Button
          to={config.router.marketplace}
          className={cx('icon', { active: pathname === config.router.marketplace })}
          small
        >
          <IconMarket width="3.1rem" height="3.1rem" />
        </Button>
        <Button
          to={config.router.groups}
          className={cx('icon', { active: pathname === config.router.groups })}
          small
        >
          <IconGroup width="3.1rem" height="3.1rem" />
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
