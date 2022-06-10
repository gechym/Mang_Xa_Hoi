import {
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faLandmarkFlag,
    faQuestionCircle,
    faSignOut,
    faUser,
    faWhiskeyGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';

import images from '~/assets/images';
import Button from '~/Components/Button';
import { InboxIcon, MessageICon, UploadICon } from '~/Components/icons';
import Image from '~/Components/Image';
import Menu from '~/Components/popper/Menu';
import Search from '~/layouts/components/Search';
import config from '~/config';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const menuItem = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'english',
                    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
                    to: '/language',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'việt nam',
                    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
                    href: '/language',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'english',
                    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
                    to: '/language',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'việt nam',
                    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
                    href: '/language',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'english',
                    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
                    to: '/language',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'việt nam',
                    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
                    href: '/language',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'english',
                    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
                    to: '/language',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'việt nam',
                    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
                    href: '/language',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'english',
                    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
                    to: '/language',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'việt nam',
                    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
                    href: '/language',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'english',
                    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
                    to: '/language',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'việt nam',
                    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
                    href: '/language',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'english',
                    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
                    to: '/language',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'việt nam',
                    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
                    href: '/language',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'english',
                    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
                    to: '/language',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'việt nam',
                    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
                    href: '/language',
                },
                {
                    title: 'Menu cấp 3',
                    icon: <FontAwesomeIcon icon={faLandmarkFlag}></FontAwesomeIcon>,
                    separate: true,
                    children: {
                        title: 'Menu 3',
                        data: [
                            {
                                type: 'language',
                                code: 'en',
                                title: 'english',
                                icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
                                to: '/language',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>,
        title: 'Keyboard shortcuts',
        to: '/upload',
    },
    {
        icon: <FontAwesomeIcon icon={faWhiskeyGlass}></FontAwesomeIcon>,
        title: 'Feedback and help',
        to: '/following',
    },
];
const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
        title: 'View Profile ',
        to: '/@bao',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
        title: 'Get coins',
        to: '/cc',
    },
    {
        icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
        title: 'Setting',
        to: '/cc',
    },
    ...menuItem,
    {
        icon: <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>,
        title: 'Logout',
        to: '/cc',
        separate: true,
    },
];

function Header() {
    const handleOnChang = (item) => {
        switch (item.type) {
            case 'language':
                alert('Đổi ngôn ngữ');
                break;

            default:
                break;
        }
    };

    const currentUser = false;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.router.home} className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" delay={200}>
                                <button className={cx('action-btn')}>
                                    <UploadICon />
                                </button>
                            </Tippy>
                            <Tippy content="Message" delay={200}>
                                <button className={cx('action-btn')}>
                                    <MessageICon height="2.6rem" width="2.6rem" />
                                </button>
                            </Tippy>

                            <Tippy content="Message" delay={200}>
                                <button className={cx('action-btn')}>
                                    <span className={cx('badge')}>12</span>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button
                                text
                                onClick={() => {
                                    alert('cc ');
                                }}
                            >
                                upload
                            </Button>

                            <Button to={'/'} small primary>
                                Login
                            </Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : menuItem} onChange={handleOnChang}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://static.fullstack.edu.vn/static/media/f8-icon.7ad2b161d5e80c87e516.png"
                                alt="Bao"
                                fallBack="https://static.fullstack.edu.vn/static/media/f8-icon.7ad2b161d5e80c87e516.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

/*  <Button text small>
                        upload
                    </Button>

                    <Button primary small>
                        Login
                    </Button>

                    <Button primary small disabled onClick={() => alert('cc')}>
                        Login
                    </Button>

                    <Button outline small>
                        Register
                    </Button>

                    <Button rounded small>
                        new
                    </Button>

                    <Button rounded outline small>
                        new
                    </Button>

                    <Button rounded outline small className={cx('test-customize')}>
                        customize classes
                    </Button> */
