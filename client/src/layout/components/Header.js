import { useDispatch, useSelector } from 'react-redux';

import { logoutUser } from '~/redux/thunk/userThunk';
import { Link, useNavigate } from 'react-router-dom';

import Button from '~/components/Button';
import { TbGridDots } from 'react-icons/tb';
import { HiBell } from 'react-icons/hi';
import { LogoHeader } from '~/components/icons';
import { RiMessengerFill } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';
import { BiUserPin } from 'react-icons/bi';

import SearchHeader from '~/components/SearchHeader';
import HeaderLayout from '~/layout/components/HeaderLayout';
import HeaderButtons from '~/layout/components/HeaderButtons';
import { MdOutlineSettings } from 'react-icons/md';
import Menu from '~/components/Menu';
import Dropdown from '~/components/Dropdown';
import { userSelecter } from '~/redux/selecter';
import Image from '~/components/Image';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, userInfo } = useSelector(userSelecter);
  const itemMenuDropdown = [
    { lable: 'My profile', icon: BiUserPin, to: '/myProfile' },
    {
      lable: 'Setting',
      icon: MdOutlineSettings,
      onClick: () => {
        alert('✅ chức năng đang hoàn thiện');
      },
    },
    {
      lable: 'logout',
      icon: FiLogOut,
      onClick: () => {
        navigate('/login');
        dispatch(logoutUser());
      },
    },
  ];

  return (
    <HeaderLayout>
      {/* Content left */}
      <div className="flex items-center w-80">
        <Link to="/">
          <LogoHeader className={'h-[40px] w-[40px] rounded-full mr-4'} />
        </Link>
        <SearchHeader className={'laptop:block tablet:block mobile:hidden'} />
      </div>
      {/* content center */}
      <div className="flex-1 flex justify-center items-center laptop:flex tablet:flex mobile:hidden">
        {user && <HeaderButtons />}
      </div>
      {/* content right */}
      <div className="w-80 flex items-center justify-end ">
        {user ? (
          <>
            <Menu>
              <Button className={'!mx-1'} icon={<TbGridDots className="w-5 h-5" />} />
            </Menu>

            <Button className={'!mx-1'} icon={<RiMessengerFill className="w-5 h-5" />} />

            <Button className={'!mx-1'} icon={<HiBell className="w-5 h-5" />} />

            <Dropdown items={itemMenuDropdown}>
              <Image className="w-10 h-10 mx-1" src={userInfo.avatar} variant="circular" />
            </Dropdown>
          </>
        ) : (
          <>
            <Button outline to="/login">
              Login
            </Button>
            <Button outline to="/register">
              register
            </Button>
          </>
        )}
      </div>
    </HeaderLayout>
  );
};

export default Header;
