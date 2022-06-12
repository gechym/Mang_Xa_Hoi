import classNames from 'classnames/bind';
import HeadleesTippy from '@tippyjs/react/headless';

import { SearchIcon } from '~/Components/icons';
import style from './search.module.scss';
import { WrapperPopper } from '~/Components/popper';
import AccountItem from '~/Components/AccountItem';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '~/hooks';
import * as service from '~/service/searchService';

const cx = classNames.bind(style);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const debonceValue = useDebounce(searchValue, 200);

  const refInputSearch = useRef();

  useEffect(() => {
    if (!debonceValue.trim()) {
      setSearchResult([]);
      setLoading(false);
      return;
    }
    setLoading(true);

    const fetchApi = async () => {
      try {
        const res = await service.search(debonceValue, 'less');

        setLoading(false);
        setSearchResult(res);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    if (debonceValue.length > 0) {
      fetchApi();
    }
  }, [debonceValue]);

  const handleHideResult = () => setShowResult(false);
  const handleShowResult = () => setShowResult(true);

  return (
    <HeadleesTippy
      visible={showResult}
      interactive
      render={(attrs) => {
        return (
          <div className={cx('search-result')} {...attrs}>
            <WrapperPopper>
              <h4 className={cx('search-title')}>Search current</h4>
              {searchResult.length > 0 &&
                searchResult.map((result) => {
                  return (
                    <AccountItem
                      onClick={() => {
                        handleHideResult();
                        setSearchResult([]);
                        setSearchValue('');
                      }}
                      key={result.id}
                      data={result}
                    />
                  );
                })}
              {loading && (
                <div className={cx('loading-wrapper')}>
                  <div className={cx('loading')}></div>
                </div>
              )}
            </WrapperPopper>
          </div>
        );
      }}
      onClickOutside={handleHideResult}
    >
      <div className={`search ${cx('search')}`}>
        <input
          ref={refInputSearch}
          value={searchValue}
          onChange={(e) => {
            if (!e.target.value.startsWith(' ')) {
              setSearchValue(e.target.value);
            }
          }}
          placeholder="Search accounts and page"
          onFocus={handleShowResult}
        />
        <button className={cx('search-btn')}>
          <SearchIcon height="2.4rem" width="2.4rem" />
        </button>
      </div>
    </HeadleesTippy>
  );
}

export default Search;
