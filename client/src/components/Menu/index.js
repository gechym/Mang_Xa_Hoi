import { ChevronLeftIcon } from '@heroicons/react/solid';
import TippyHeadless from '@tippyjs/react/headless';
import { memo, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import MenuItem from './menuItem';
import Wrapper from './wrapper';

import { SearchIcon } from '@heroicons/react/solid';

const menuItemDefault = [
  {
    icon: <SearchIcon className="h-5 w-5" />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'vi',
          title: 'việt nam',
          icon: <SearchIcon className="h-5 w-5" />,
          href: '/language',
        },
        {
          type: 'language',
          code: 'en',
          title: 'english',
          icon: <SearchIcon className="h-5 w-5" />,
          to: '/language',
        },
        {
          type: 'language',
          code: 'en',
          title: 'english',
          icon: <SearchIcon className="h-5 w-5" />,
          to: '/language',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'việt nam',
          icon: <SearchIcon className="h-5 w-5" />,
          href: '/language',
        },
        {
          type: 'language',
          code: 'en',
          title: 'english',
          icon: <SearchIcon className="h-5 w-5" />,
          to: '/language',
        },
        {
          type: 'language',
          code: 'en',
          title: 'english',
          icon: <SearchIcon className="h-5 w-5" />,
          to: '/language',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'việt nam',
          icon: <SearchIcon className="h-5 w-5" />,
          href: '/language',
        },
        {
          type: 'language',
          code: 'en',
          title: 'english',
          icon: <SearchIcon className="h-5 w-5" />,
          to: '/language',
        },
        {
          type: 'language',
          code: 'en',
          title: 'english',
          icon: <SearchIcon className="h-5 w-5" />,
          to: '/language',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'việt nam',
          icon: <SearchIcon className="h-5 w-5" />,
          href: '/language',
        },
        {
          type: 'language',
          code: 'en',
          title: 'english',
          icon: <SearchIcon className="h-5 w-5" />,
          to: '/language',
        },
        {
          type: 'language',
          code: 'en',
          title: 'english',
          icon: <SearchIcon className="h-5 w-5" />,
          to: '/language',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'việt nam',
          icon: <SearchIcon className="h-5 w-5" />,
          href: '/language',
        },
        {
          type: 'language',
          code: 'en',
          title: 'english',
          icon: <SearchIcon className="h-5 w-5" />,
          to: '/language',
        },
        {
          type: 'language',
          code: 'en',
          title: 'english',
          icon: <SearchIcon className="h-5 w-5" />,
          to: '/language',
        },
        {
          type: 'language',
          code: 'en',
          title: 'english',
          icon: <SearchIcon className="h-5 w-5" />,
          to: '/language',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'việt nam',
          icon: <SearchIcon className="h-5 w-5" />,
          href: '/language',
        },
        {
          type: 'language',
          code: 'en',
          title: 'english',
          icon: <SearchIcon className="h-5 w-5" />,
          to: '/language',
        },
        {
          type: 'language',
          code: 'en',
          title: 'english',
          icon: <SearchIcon className="h-5 w-5" />,
          to: '/language',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'việt nam',
          icon: <SearchIcon className="h-5 w-5" />,
          href: '/language',
        },
        {
          type: 'language',
          code: 'en',
          title: 'english',
          icon: <SearchIcon className="h-5 w-5" />,
          to: '/language',
        },
        {
          title: 'Menu cấp 3',
          icon: <SearchIcon className="h-5 w-5" />,
          separate: true,
          children: {
            title: 'Menu 3',
            data: [
              {
                type: 'language',
                code: 'en',
                title: 'english',
                icon: <SearchIcon className="h-5 w-5" />,
                to: '/language',
              },
            ],
          },
        },
      ],
    },
  },
  {
    icon: <SearchIcon className="h-5 w-5" />,
    title: 'Keyboard shortcuts',
    to: '/upload',
  },
  {
    icon: <SearchIcon className="h-5 w-5" />,
    title: 'Feedback and help',
    to: '/following',
  },
];

function Menu({ children, items = menuItemDefault, onChange = () => {} }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  console.log('render Menu');

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

  const getClassTextTheme = () => 'text-textPrimaryLight dark:text-textPrimaryDark';

  const getClassBgTheme = () =>
    'bg-lightSecondary text-textPrimaryLight dark:bg-darkSecondary dark:text-textPrimaryDark';

  const renderHeader = () => {
    return (
      <div className={`w-full h-8 flex px-1 items-center justify-between ${getClassTextTheme()}`}>
        <ChevronLeftIcon
          onClick={() => {
            setHistory(
              (prev) => prev.slice(0, prev.length - 1), // cắt một cấp menu trong mảng history
            );
          }}
          className="h-7 w-7 cursor-pointer "
        />
        <span className="relative -translate-x-1/2">{current.title}</span>
      </div>
    );
  };

  const renderResult = (atrts) => {
    return (
      <div {...atrts} className={`${getClassBgTheme()} shadow-lg rounded-md p-1 min-w-[180px]`}>
        {history.length > 1 && renderHeader()}
        <Wrapper className={'!shadow-none'}>{renderDataItems()}</Wrapper>
      </div>
    );
  };

  const handleResetMenu = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  return (
    <>
      <TippyHeadless
        hideOnClick="toggle"
        placement="top-end"
        delay={[0, 200]}
        offset={[10, 5]}
        interactive
        onHidden={handleResetMenu}
        render={renderResult}
      >
        {children}
      </TippyHeadless>
    </>
  );
}

export default memo(Menu);
