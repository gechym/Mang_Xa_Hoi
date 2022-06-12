import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import style from './siderBar.module.scss';

const cx = classNames.bind(style);

function SiderBar({ width = '350' }) {
  return (
    <div style={{ width: `${width}px` }} className={cx('siderBar')}>
      SiderBar
    </div>
  );
}

SiderBar.propsTypes = {
  width: PropTypes.string,
};

export default SiderBar;
