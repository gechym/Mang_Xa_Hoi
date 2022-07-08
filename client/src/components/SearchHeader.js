import React, { useEffect, useState } from 'react';
import HeadleesTippy from '@tippyjs/react/headless';
import { SearchIcon } from '@heroicons/react/solid';
import { useDispatch } from 'react-redux';
import { logoutUser } from '~/redux/thunk/userThunk';

import Button from './Button';
import useDebounce from '~/hooks/useDebounce';
import { searchUser } from '~/api/userService';
import Wrapper from './Menu/wrapper';
import { AiOutlineLoading, AiOutlineCloseCircle } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import Image from './Image';
import toast from 'react-hot-toast';

const SearchHeader = ({ className }) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const valueDebounce = useDebounce(searchValue, 200);
  const [showResult, setShowResult] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      try {
        const res = await searchUser(valueDebounce);
        console.log(res);
        if (res.data) {
          setSearchResult(res.data.users);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error.message);

        if (error.message === 'JsonWebTokenError: jwt malformed') {
          navigate('/login');
          dispatch(logoutUser());
          toast('Session đã bị tác động từ bên ngoài vui lòng đăng nhập lại để bảo mật', {
            icon: '🚧',
          });
        }

        if (error.message === 'JsonWebTokenError: invalid token') {
          navigate('/login');
          dispatch(logoutUser());
          toast('Session đã bị tác động từ bên ngoài vui lòng đăng nhập lại để bảo mật', {
            icon: '🚧',
          });
        }
      }
    };

    if (!valueDebounce.trim()) {
      setSearchValue('');
      setSearchResult([]);
      return;
    }
    fetchApi();
  }, [valueDebounce, dispatch, navigate]);

  const handleHideResult = () => setShowResult(false);
  const handleShowResult = () => setShowResult(true);

  const getClassTheme = () =>
    'bg-lightSecondary text-textPrimaryLight dark:bg-darkSecondary dark:text-textPrimaryDark';

  const renderUser = () => {
    return (
      <div className="w-[320px]">
        {searchResult.length > 0 && (
          <>
            <Wrapper className={'p-2 relative'}>
              <h4
                className={`text-sm
                pt-2
                px-2
                rounded-t-lg
                fixed z-10 top-0 left-0 right-0 ${getClassTheme()}`}
              >
                Search current
              </h4>
              <div className="mt-8">
                {searchResult.map((user, index) => {
                  return (
                    <Link
                      to={`/user/${user.id}`}
                      key={index}
                      className="flex items-center gap-2 mt-2 cursor-pointer"
                      onClick={() => {
                        setSearchValue('');
                        setSearchResult([]);
                        setShowResult(false);
                      }}
                    >
                      <Image
                        className="bg-cyan-50 ring-1 ring-[#ced0d4] dark:ring-[#2f3031]"
                        size="md"
                        variant="circular"
                        src={user.avatar}
                        alt={user.name}
                      />
                      <span>{user.name}</span>
                    </Link>
                  );
                })}
              </div>
            </Wrapper>
          </>
        )}
      </div>
    );
  };

  return (
    <HeadleesTippy visible={showResult} interactive render={renderUser} onClickOutside={handleHideResult}>
      <div className={`relative w-max h-max'' shadow-lg rounded-full ${className ? className : ''}`}>
        <input
          placeholder="Search every 😘😘"
          value={searchValue}
          onFocus={handleShowResult}
          onChange={(e) => {
            if (!e.target.value.startsWith(' ')) {
              setSearchValue(e.target.value);
            }
          }}
          className=" min-w-[200px] px-6 cursor-pointer relative h-[40px] dark:bg-darkBtn bg-light rounded-full outline-none w-full focus:cursor-text  "
        />
        {searchValue && !loading && (
          <AiOutlineCloseCircle
            onClick={() => {
              setSearchValue('');
              setSearchResult([]);
            }}
            className="cursor-pointer absolute z-1 right-[16%] inset-y-0 my-auto "
          />
        )}

        {loading && (
          <AiOutlineLoading className="z-2 cursor-pointer absolute z-1 right-[16%] inset-y-0 my-auto animate-spin" />
        )}

        <Button
          className="
          before:block before:absolute before:h-7 before:right-8 before:w-[1px] before:dark:bg-[#2f3031] before:bg-[#ced0d4] 
          before:-skew-y-3
          !h-8 !w-8 
          absolute z-1 right-[0] inset-y-0 my-auto "
          icon={<SearchIcon className="w-4 h-4" />}
        />
      </div>
    </HeadleesTippy>
  );
};

export default SearchHeader;
