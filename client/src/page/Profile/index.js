import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './profile.module.scss';

const cx = classNames.bind(style);

function Profile() {
  const { nickName } = useParams();
  return (
    <div className={cx('wrapper')}>
      <header className={`box-content ${cx('header-profile')}`}>
        <div className={cx('image-cover-content')}>
          <img src="https://video.fhan5-6.fna.fbcdn.net/v/t1.6435-9/107812873_1149153438793918_440150567973079445_n.jpg?stp=dst-jpg_p960x960&_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=S8T11jTteKYAX_HGtQt&_nc_ht=video.fhan5-6.fna&oh=00_AT-wN0weF9RaKWsiPjYp9Rze2kGr4J_Trw3nMv220hOsag&oe=62D0E97A" />
        </div>
        <div className={cx('user-content')}>
          <div className={cx('content-left')}>
            <div className={cx('avatar')}>
              <img src="https://video.fdad3-4.fna.fbcdn.net/v/t1.6435-9/194808274_1386494815059778_930409726896657162_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KLAqdp1svw0AX8h00AR&_nc_ht=video.fdad3-4.fna&oh=00_AT-uEte0FDF6aEKtY5FqnqbTu1F9X96DPDrBUZV8_AsIiw&oe=62D3C34E" />
            </div>
            <div className={cx('info')}>
              <h1>{nickName}</h1>
              <h5>345 Bạn bè</h5>
            </div>
          </div>
          <div className={cx('content-right')}></div>
        </div>
      </header>
    </div>
  );
}

export default Profile;
