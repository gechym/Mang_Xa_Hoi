import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadleesTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';

import { WrapperPopper } from '~/Components/popper';
import styles from './search.module.scss';
import AccountItem from '~/Components/AccountItem';
import { SearchIcon } from '~/Components/icons';
import { useDebounce } from '~/hooks';
import * as service from '~/service/searchService';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const debonce = useDebounce(searchValue, 500);

    const [showResult, setShowResult] = useState(true);

    const refInputSearch = useRef();

    useEffect(() => {
        if (!debonce.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);

        const fetchApi = async () => {
            try {
                const res = await service.search(debonce, 'less');

                setLoading(false);
                setSearchResult(res);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };

        if (debonce.length > 0) {
            fetchApi();
        }
    }, [debonce]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        refInputSearch.current.focus();
    };

    const handleHideResult = () => setShowResult(false);
    const handleShowResult = () => setShowResult(true);

    return (
        // Using a wrapper <div> or <span> tag around the
        //reference element solves this by creating a new parentNode context.
        <div>
            <HeadleesTippy
                visible={showResult && searchResult.length > 0}
                interactive
                render={(attrs) => {
                    return (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <WrapperPopper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                {searchResult.length > 0 ? (
                                    searchResult.map((result) => {
                                        return (
                                            <AccountItem
                                                onClick={() => {
                                                    setSearchResult([]);
                                                    setSearchValue('');
                                                }}
                                                key={result.id}
                                                data={result}
                                            />
                                        );
                                    })
                                ) : (
                                    <h4 className={cx('search-title')}>kết quả bạn tìm kiếm {searchResult.length}</h4>
                                )}
                            </WrapperPopper>
                        </div>
                    );
                }}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={refInputSearch}
                        value={searchValue}
                        onChange={(e) => {
                            if (!e.target.value.startsWith(' ')) {
                                setSearchValue(e.target.value);
                            }
                        }}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onFocus={handleShowResult}
                    />

                    {!!searchValue && !loading && (
                        <button onClick={handleClear} className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon height="2.4rem" width="2.4rem" />
                    </button>
                </div>
            </HeadleesTippy>
        </div>
    );
}

export default Search;
