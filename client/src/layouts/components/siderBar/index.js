import classNames from 'classnames/bind';
import style from './siderBar.module.scss';

const cx = classNames.bind(style);

function SiderBar() {
  return <div className={cx('siderBar')}>SiderBar</div>;
}

export default SiderBar;
