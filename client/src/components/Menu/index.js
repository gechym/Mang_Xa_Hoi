import { ChevronLeftIcon } from '@heroicons/react/solid';
import TippyHeadless from '@tippyjs/react/headless';
import { useState } from 'react';
import 'tippy.js/dist/tippy.css';
import MenuItem from './menuItem';
import Wrapper from './wrapper';

function Menu({ children, items, onChange = () => {} }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderDataItems = () => {
    return current.data.map((item, index) => {
      let isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              // xử lý logic từ lớp cha
              onChange(item);
            }
          }}
        />
      );
    });
  };

  const renderHeader = () => {
    return (
      <div className="w-full h-8 flex px-1 items-center justify-between text-textPrimaryLight dark:text-textPrimaryDark ">
        <ChevronLeftIcon
          onClick={() => {
            setHistory(
              (prev) => prev.slice(0, prev.length - 1), // cắt một cấp menu trong mảng history
            );
          }}
          className="h-7 w-7 cursor-pointer "
        />
        <span>{current.title}</span>
      </div>
    );
  };

  const renderResult = (atrts) => {
    return (
      <div
        {...atrts}
        className="bg-lightBtn text-textPrimaryLight dark:bg-darkBtn dark:text-textPrimaryDark  rounded-md p-1 min-w-[180px]"
      >
        {history.length > 1 && renderHeader()}

        <Wrapper>{renderDataItems()}</Wrapper>
      </div>
    );
  };

  const handleResetMenu = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  return (
    <TippyHeadless
      hideOnClick="toggle"
      placement="top-end"
      delay={[0, 400]}
      offset={[10, 5]}
      interactive
      onHidden={handleResetMenu}
      render={renderResult}
    >
      {children}
    </TippyHeadless>
  );
}

export default Menu;
