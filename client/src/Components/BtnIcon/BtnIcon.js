import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import style from './btnIcon.module.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Menu from '../popper/Menu';
import { HomeIcon } from '../icons';

const cx = classNames.bind(style);
const userMenu = [
  {
    icon: <HomeIcon width="2rem" height="2rem" />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'english',
          icon: <HomeIcon width="2rem" height="2rem" />,
          to: '/language',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'việt nam',
          icon: <HomeIcon width="2rem" height="2rem" />,
          href: '/language',
        },
        {
          type: 'language',
          code: 'en',
          title: 'english',
          icon: <HomeIcon width="2rem" height="2rem" />,
          to: '/language',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'việt nam',
          icon: <HomeIcon width="2rem" height="2rem" />,
          href: '/language',
        },
        {
          type: 'language',
          code: 'en',
          title: 'english',
          icon: <HomeIcon width="2rem" height="2rem" />,
          to: '/language',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'việt nam',
          icon: <HomeIcon width="2rem" height="2rem" />,
          href: '/language',
        },
        {
          type: 'language',
          code: 'en',
          title: 'english',
          icon: <HomeIcon width="2rem" height="2rem" />,
          to: '/language',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'việt nam',
          icon: <HomeIcon width="2rem" height="2rem" />,
          href: '/language',
        },
        {
          type: 'language',
          code: 'en',
          title: 'english',
          icon: <HomeIcon width="2rem" height="2rem" />,
          to: '/language',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'việt nam',
          icon: <HomeIcon width="2rem" height="2rem" />,
          href: '/language',
        },
        {
          type: 'language',
          code: 'en',
          title: 'english',
          icon: <HomeIcon width="2rem" height="2rem" />,
          to: '/language',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'việt nam',
          icon: <HomeIcon width="2rem" height="2rem" />,
          href: '/language',
        },
        {
          type: 'language',
          code: 'en',
          title: 'english',
          icon: <HomeIcon width="2rem" height="2rem" />,
          to: '/language',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'việt nam',
          icon: <HomeIcon width="2rem" height="2rem" />,
          href: '/language',
        },
        {
          type: 'language',
          code: 'en',
          title: 'english',
          icon: <HomeIcon width="2rem" height="2rem" />,
          to: '/language',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'việt nam',
          icon: <HomeIcon width="2rem" height="2rem" />,
          href: '/language',
        },
        {
          title: 'Menu cấp 3',
          icon: <HomeIcon width="2rem" height="2rem" />,
          separate: true,
          children: {
            title: 'Menu 3',
            data: [
              {
                type: 'language',
                code: 'en',
                title: 'english',
                icon: <HomeIcon width="2rem" height="2rem" />,
                to: '/language',
              },
            ],
          },
        },
      ],
    },
  },
  {
    icon: <HomeIcon width="2rem" height="2rem" />,
    title: 'Keyboard shortcuts',
    to: '/upload',
  },
  {
    icon: <HomeIcon width="2rem" height="2rem" />,
    title: 'Feedback and help',
    to: '/following',
  },
];
function BtnIcon({ children, text, label, menu }) {
  return menu ? (
    <Menu items={userMenu}>
      <button className={`btnIcon ${cx('btnIcon')}`}>
        {children}
        {label && <span>{label}</span>}
      </button>
    </Menu>
  ) : (
    <Tippy content={text}>
      <button className={`btnIcon ${cx('btnIcon')}`}>
        {children}
        {label && <span>{label}</span>}
      </button>
    </Tippy>
  );
}

BtnIcon.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
  label: PropTypes.string,
};

export default BtnIcon;
