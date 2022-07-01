import React, { useEffect, useState } from 'react';
import HeadleesTippy from '@tippyjs/react/headless';
import { SearchIcon } from '@heroicons/react/solid';

import Button from './Button';
import useDebounce from '~/hooks/useDebounce';
import { searchUser } from '~/api/userService';
import Wrapper from './Menu/wrapper';
import { Avatar } from '@material-tailwind/react';
import { AiOutlineLoading, AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const SearchHeader = ({ className }) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const valueDebounce = useDebounce(searchValue, 500);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      try {
        const res = await searchUser(valueDebounce);
        setSearchResult(res.users);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    if (!valueDebounce.trim()) {
      setSearchValue('');
      setSearchResult([]);
      return;
    }
    fetchApi();
  }, [valueDebounce]);

  const handleHideResult = () => setShowResult(false);
  const handleShowResult = () => setShowResult(true);

  const renderUser = () => {
    return (
      <div className="w-[320px]">
        {searchResult.length > 0 && (
          <>
            <Wrapper className={'p-2 relative'}>
              <h4
                className="
                text-sm
                pt-2
                px-2
                rounded-t-lg
                fixed z-10 top-0 left-0 right-0 bg-lightSecondary text-textPrimaryLight
                dark:bg-darkSecondary 
                dark:text-textPrimaryDark"
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
                    >
                      <Avatar
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
      <div className={`relative mx-auto w-max shadow-lg  rounded-full ${className}`}>
        <input
          placeholder="Search every 😘😘"
          value={searchValue}
          onFocus={handleShowResult}
          onChange={(e) => {
            if (!e.target.value.startsWith(' ')) {
              setSearchValue(e.target.value);
            }
          }}
          className="peer min-w-[350px] px-6 cursor-pointer relative h-12 dark:bg-darkBtn bg-light rounded-full outline-none w-full focus:cursor-text  "
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
          before:block before:absolute before:h-7 before:right-11 before:w-[1px] before:dark:bg-[#2f3031] before:bg-[#ced0d4] 
          before:-skew-y-3  
          absolute z-1 right-[0] inset-y-0 my-auto "
          icon={<SearchIcon className="w-5 h-5" />}
        />
      </div>
    </HeadleesTippy>
  );
};

export default SearchHeader;
