import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '~/Components/Button';
import styles from './menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });

    return (
        <>
            <Button
                to={data.to ? data.to : ''}
                href={data.href ? data.href : undefined}
                leftIcon={data.icon}
                onClick={onClick}
                className={classes}
            >
                {data.title}
            </Button>
        </>
    );
}


MenuItem.propTypes = {
    data : PropTypes.object.isRequired,
    onClick : PropTypes.func
}

export default MenuItem;
