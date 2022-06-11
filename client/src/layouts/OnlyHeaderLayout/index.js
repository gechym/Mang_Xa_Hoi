import classNames from 'classnames/bind';
import style from './onlyHeaderLayout.module.scss';
import Header from '~/layouts/components/Header';
import SiderBar from '~/layouts/components/siderBar';
const cx = classNames.bind(style);

function OnlyHeaderLayput({ children }) {
  return (
    <div className={cx('container')}>
      OnlyHeaderLayput
      <Header />
      <div className={cx('body')}>
        <SiderBar width={500} />
        {children}
      </div>
    </div>
  );
}

export default OnlyHeaderLayput;
