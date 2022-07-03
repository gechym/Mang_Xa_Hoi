import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiFillHome, AiOutlineHome } from 'react-icons/ai';
import { RiSlideshow3Fill, RiSlideshow3Line, RiGroup2Line, RiGroup2Fill } from 'react-icons/ri';
import { IoStorefrontSharp, IoStorefrontOutline } from 'react-icons/io5';
import Button from '~/components/Button';

const classNameButton =
  '!w-[110px] !h-[50px] !rounded-lg  dark:hover:!bg-[#3A3B3C]  dark:!bg-darkSecondary dark:text-[#18191A] !bg-lightSecondary !text-[#65676B] hover:!bg-[#F2F2F2]';

const HeaderButtons = () => {
  const { pathname } = useLocation();

  const classNameButtonActive = (path) => {
    return `${classNameButton} ${
      pathname === path ? 'myBorder dark:!text-[#2374E1] !text-[#1B74E4] !rounded-none !rounded-t-lg' : ''
    }`;
  };

  return (
    <>
      <Link to="/home">
        <Button
          className={classNameButtonActive('/home')}
          large
          icon={
            pathname === '/home' ? <AiFillHome className="w-7 h-7" /> : <AiOutlineHome className="w-7 h-7" />
          }
        />
      </Link>
      <Link to="/watch">
        <Button
          className={classNameButtonActive('/watch')}
          large
          icon={
            pathname === '/watch' ? (
              <RiSlideshow3Fill className="w-7 h-7" />
            ) : (
              <RiSlideshow3Line className="w-7 h-7 " />
            )
          }
        />
      </Link>
      <Link to="/marketplace">
        <Button
          className={classNameButtonActive('/marketplace')}
          large
          icon={
            pathname === '/marketplace' ? (
              <IoStorefrontSharp className="w-7 h-7" />
            ) : (
              <IoStorefrontOutline className="w-7 h-7" />
            )
          }
        />
      </Link>
      <Link to="/groups">
        <Button
          className={classNameButtonActive('/groups')}
          large
          icon={
            pathname === '/groups' ? (
              <RiGroup2Fill className=" w-7 h-7" />
            ) : (
              <RiGroup2Line className=" w-7 h-7" />
            )
          }
        />
      </Link>
    </>
  );
};

export default HeaderButtons;
