import { useDispatch } from 'react-redux';
import { toggleTheme } from '~/redux/thunk/themeThunk';

import Button from '~/components/Button';
import { BsSun } from 'react-icons/bs';
import { LogoHeader } from '~/components/icons';
import SearchHeader from '~/components/SearchHeader';
import WrapperResponsive from '../components/wrapperResponsive';

function DefaultLayout({ children }) {
  const dispatch = useDispatch();

  return (
    <div
      className="
      relative
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
    grid min-h-screen gap-2 p-2 "
    >
      <div
        className="
        dark:bg-darkSecondary
        bg-lightSecondary
        shadow-md
        fixed top-0 left-0 right-0 z-10
        h-[56px]
        laptop:col-start-1 
        laptop:col-end-4 
        tablet:col-start-1 
        tablet:col-end-4 
        px-4
        flex
        items-center
      "
      >
        <LogoHeader className={'h-[40px] w-[40px] rounded-full'} />
        <SearchHeader />
      </div>

      <div
        className="
      laptop:col-start-1 
      laptop:col-end-1 
      laptop:row-start-2 
      laptop:row-end-4 
      mobile:hidden
      tablet:hidden
      laptop:block 
      
      "
      >
        Thanh chức năng
      </div>
      <div
        className="
        laptop:col-start-2 laptop:col-end-2 
        laptop:row-start-2 laptop:row-end-4 
        tablet:col-start-1 tablet:col-end-3 
        tablet:row-start-2 tablet:row-end-4
        mobile:mt-16
        laptop:mt-0
        tablet:mt-0
        border-2
        "
      >
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
      </div>
      <div
        className="
      laptop:col-start-3 
      laptop:col-end-3 
      laptop:row-start-2 
      laptop:row-end-4 
      tablet:row-start-2 
      tablet:row-end-4
      tablet:col-start-3
      tablet:col-end-4
      tablet:block
      mobile:hidden
      
      "
      >
        Thanh Hien User
      </div>
    </div>
  );
}

export default DefaultLayout;
