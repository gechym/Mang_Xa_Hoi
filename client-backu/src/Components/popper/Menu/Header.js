import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './menu.module.scss';
import { BackIcon } from '~/Components/icons';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
  return (
    <header className={cx('header')}>
      <button className={`back ${cx('back')}`} onClick={onBack}>
        <BackIcon width="2rem" height="2rem" />
      </button>
      <h4 className={cx('header-title')}>{title}</h4>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default Header;
