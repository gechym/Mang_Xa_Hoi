import { useDispatch } from 'react-redux';

import { toggleTheme } from '~/redux/thunk/themeThunk';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import { BsSun } from 'react-icons/bs';
import { TbGridDots } from 'react-icons/tb';
import { HiBell } from 'react-icons/hi';
import { LogoHeader } from '~/components/icons';
import { RiMessengerFill } from 'react-icons/ri';

import SearchHeader from '~/components/SearchHeader';

import WrapperResponsive from '../components/wrapperResponsive';
import HeaderLayout from '../components/HeaderLayout';
import RightLayout from '../components/RightLayout';
import LeftLayout from '../components/LeftLayout';
import MainLayout from '../components/mainLayout';
import HeaderButtons from '../components/HeaderButtons';
import { Avatar } from '@material-tailwind/react';
import Menu from '~/components/Menu';
import Dropdown from '~/components/Dropdown';

function DefaultLayout({ children }) {
  const dispatch = useDispatch();

  return (
    <div
      className="
    mobile:dark:bg-dark 
    laptop:dark:bg-dark 
    tablet:dark:bg-dark 
    bg-light
    text-textPrimaryLight dark:text-textPrimaryDark
    mobile:grid-cols-1 
    mobile:grid-rows-[1fr] 
    tablet:grid-cols-[1.5fr_1.5fr_1.4fr] 
    tablet:grid-rows-[50px_1fr_1fr] 
    laptop:grid-cols-[360px_1fr_360px]
    laptop:grid-rows-[56px_1fr_1fr] 
    grid min-h-screen gap-2 p-2"
    >
      {/* Header */}
      <HeaderLayout>
        {/* Content left */}
        <div className="flex items-center w-96">
          <Link to="/">
            <LogoHeader className={'h-[40px] w-[40px] rounded-full mr-4'} />
          </Link>
          <SearchHeader className={'laptop:block tablet:block mobile:hidden'} />
        </div>
        {/* content center */}
        <div className="flex-1 flex justify-center items-center">
          <HeaderButtons />
        </div>
        {/* content right */}
        <div className="w-96 flex items-center justify-end">
          <Dropdown>
            <Button className={'!mx-1'} icon={<TbGridDots className="w-5 h-5" />} />
          </Dropdown>

          <Button className={'!mx-1'} icon={<RiMessengerFill className="w-5 h-5" />} />

          <Button className={'!mx-1'} icon={<HiBell className="w-5 h-5" />} />

          <Menu>
            <Avatar
              className="w-10 h-10 mx-1"
              src="https://avatars.githubusercontent.com/u/79199646?v=4"
              variant="circular"
            />
          </Menu>
        </div>
      </HeaderLayout>

      <RightLayout>Thanh chức năng</RightLayout>

      <MainLayout>
        {children}
        <WrapperResponsive>
          <Button
            icon={<BsSun />}
            onClick={() => {
              dispatch(toggleTheme());
            }}
          />
        </WrapperResponsive>
        <WrapperResponsive>
          <Button
            icon={<BsSun />}
            onClick={() => {
              dispatch(toggleTheme());
            }}
          />
        </WrapperResponsive>
      </MainLayout>

      <LeftLayout>Thanh user</LeftLayout>
    </div>
  );
}

export default DefaultLayout;
