import React from 'react';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import { TbGridDots } from 'react-icons/tb';
import { HiBell } from 'react-icons/hi';
import { LogoHeader } from '~/components/icons';
import { RiMessengerFill } from 'react-icons/ri';

import SearchHeader from '~/components/SearchHeader';

import HeaderLayout from '~/layout/components/HeaderLayout';
import HeaderButtons from '~/layout/components/HeaderButtons';
import { Avatar } from '@material-tailwind/react';
import Menu from '~/components/Menu';
import Dropdown from '~/components/Dropdown';

const NotFound = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-light dark:bg-dark text-textPrimaryLight dark:text-textPrimaryDark">
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
      <h1 className="text-9xl font-extrabold text-textPrimaryLight dark:text-textPrimaryDark tracking-widest">
        404
      </h1>
      <div className="bg-primary px-2 text-sm rounded rotate-12 absolute">Page Not Found</div>
      <button className="mt-5">
        <span className="relative inline-block text-sm font-medium text-primary group active:bg-primary/500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-primary group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            <Link to="/">Go Home</Link>
          </span>
        </span>
      </button>
    </main>
  );
};

export default NotFound;
