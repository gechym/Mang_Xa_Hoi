import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header';
import classNames from 'classnames/bind';
import style from './defaultLayout.module.scss';
import SiderBar from '../components/siderBar';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
  return (
    <div className={cx('container')}>
      DefaultLayout
      <Header />
      <div className={cx('body')}>
        <SiderBar />
        {children}
        <SiderBar />
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
};

export default DefaultLayout;
