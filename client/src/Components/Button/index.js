import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './button.module.scss';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    small = false,
    large = false,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    disabled = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProp
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProp,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (disabled) {
        Object.keys(props).forEach((key) => {
            console.log(key);
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        small,
        large,
        disabled,
        rounded,
        [className]: className,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to : PropTypes.string,
    href : PropTypes.string,
    small : PropTypes.bool,
    large : PropTypes.bool,
    primary : PropTypes.bool,
    outline : PropTypes.bool,
    text : PropTypes.bool,
    rounded : PropTypes.bool,
    disabled : PropTypes.bool,
    children : PropTypes.node.isRequired,
    className : PropTypes.string,
    leftIcon : PropTypes.node,
    rightIcon : PropTypes.node,
    onClick : PropTypes.func,
}

export default Button;
