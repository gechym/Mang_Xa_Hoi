import classNames from 'classnames/bind';
import { SearchIcon } from '~/Components/icons';
import style from './search.module.scss';

const cx = classNames.bind(style);

function Search() {
  return (
    <div className={`search ${cx('search')}`}>
      <input placeholder="Search accounts and page" />
      <button className={cx('search-btn')}>
        <SearchIcon height="2.4rem" width="2.4rem" />
      </button>
    </div>
  );
}

export default Search;
