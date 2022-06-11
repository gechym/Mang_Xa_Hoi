import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './profile.module.scss';

const cx = classNames.bind(style);

function Profile() {
  const { nickName } = useParams();
  return <div className={cx('wrapper')}>{nickName}</div>;
}

export default Profile;
