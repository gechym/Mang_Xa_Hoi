import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import style from './header.module.scss';
import { LogoHeader } from '~/Components/icons';
import config from '~/config';
import Search from '../Search';

const cx = classNames.bind(style);

function Header() {
  return (
    <header className={`header ${cx('header')}`}>
      <div className={cx('wrapper')}>
        <Link to={config.router.home} className={cx('logo-header')}>
          <LogoHeader width="4.8rem" height="4.8rem" />
        </Link>
        <Search />
      </div>
    </header>
  );
}

export default Header;
