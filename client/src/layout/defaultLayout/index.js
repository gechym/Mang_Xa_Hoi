import { useDispatch } from 'react-redux';
import { toggleTheme } from '~/redux/thunk/themeThunk';

import Button from '~/components/Button';
import { BsSun } from 'react-icons/bs';
import { LogoHeader } from '~/components/icons';
import SearchHeader from '~/components/SearchHeader';
import WrapperResponsive from '../components/wrapperResponsive';
import HeaderLayout from '../components/HeaderLayout';
import RightLayout from '../components/RightLayout';
import LeftLayout from '../components/LeftLayout';
import MainLayout from '../components/mainLayout';
import { Link } from 'react-router-dom';

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
      <HeaderLayout>
        <Link to="/">
          <LogoHeader className={'h-[40px] w-[40px] rounded-full mr-4'} />
        </Link>
        <SearchHeader className={'laptop:block tablet:block mobile:hidden'} />
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
