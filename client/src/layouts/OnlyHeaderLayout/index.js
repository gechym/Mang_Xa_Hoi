import classNames from 'classnames/bind';
import style from './onlyHeaderLayout.module.scss';
import Header from '~/layouts/components/Header';
const cx = classNames.bind(style);

function OnlyHeaderLayput({ children }) {
  return (
    <div className={cx('container')}>
      OnlyHeaderLayput
      <Header />
      <div className={cx('body')}> {children}</div>
    </div>
  );
}

export default OnlyHeaderLayput;
