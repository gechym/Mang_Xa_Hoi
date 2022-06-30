import { Link } from 'react-router-dom';

function Button({
  children,
  className,
  leftIcon,
  rightIcon,
  to,
  href,
  small,
  medium,
  large,
  outline,
  disabled,
  onClick,
  ...passProp
}) {
  let Comp = 'button';

  const props = {
    ...passProp,
  };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      console.log(key);
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to && !disabled) {
    props.to = to;
    Comp = Link;
  } else if (href && !disabled) {
    props.href = href;
    Comp = 'a';
  }

  return (
    <button
      className={`btn ${className} ${small && 'px-4 py-2'} ${medium && 'px-5 py-3'} ${large && 'px-6 py-4'} ${
        disabled ? 'opacity-70 cursor-not-allowed' : ''
      } ${outline ? 'rounded-lg bg-transparent ring ring-primary text-primary' : ''}`}
      onClick={!disabled && onClick}
      {...props}
    >
      <Comp
        className={`flex justify-center items-center ${disabled ? 'opacity-70 cursor-not-allowed' : ''}`}
        {...props}
      >
        {leftIcon && leftIcon}
        <span className="mx-1">{children}</span>
        {rightIcon && rightIcon}
      </Comp>
    </button>
  );
}

export default Button;
