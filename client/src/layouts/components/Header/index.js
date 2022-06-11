import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import style from './header.module.scss';
import { LogoHeader, HomeIcon, TiviIcon, IconMarket, IconGroup } from '~/Components/icons';
import config from '~/config';
import Search from '../Search';
import Button from '~/Components/Button';

const cx = classNames.bind(style);

function Header() {
  return (
    <header className={`header ${cx('header')}`}>
      <div className={cx('wrapper-menu-left')}>
        <Link to={config.router.home} className={cx('logo-header')}>
          <LogoHeader width="4.8rem" height="4.8rem" />
        </Link>
        <Search />
      </div>
      <div className={cx('wrapper-icon')}>
        <Button className={cx('icon')} large>
          <HomeIcon width="3.1rem" height="3.1rem" />
        </Button>
        <Button className={cx('icon')} large>
          <TiviIcon width="3.1rem" height="3.1rem" />
        </Button>
        <Button className={cx('icon')} large>
          <IconMarket width="3.1rem" height="3.1rem" />
        </Button>
        <Button className={cx('icon')} large>
          <IconGroup width="3.1rem" height="3.1rem" />
        </Button>
      </div>

      <div style={{ width: '350px' }}>User</div>
    </header>
  );
}

export default Header;
