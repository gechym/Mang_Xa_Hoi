import classNames from 'classnames/bind';
import style from './header.module.scss';
const cx = classNames.bind(style);

function Header() {
  return <header className={cx('header')}>header</header>;
}

export default Header;
