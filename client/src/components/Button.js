import { Link } from 'react-router-dom';
import { forwardRef } from 'react';

function Button(
  {
    children,
    className,
    leftIcon,
    rightIcon,
    icon,
    to,
    href,
    small,
    medium,
    large,
    outline,
    disabled,
    onClick,
    ...passProp
  },
  ref,
) {
  let Comp = 'div';

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

  const getClassBgHoverTheme = () =>
    'bg-lightBtn dark:bg-darkBtn text-textPrimaryLight dark:text-textPrimaryDark hover:bg-lightHoverIcon dark:hover:bg-darkHoverIcon';

  return (
    <button
      className={`btn 
        ${getClassBgHoverTheme()}
        ${small ? 'px-4 py-2' : ''} ${medium ? 'px-5 py-3' : ''} ${large ? 'px-6 py-4' : ''}
        ${disabled ? 'opacity-70 cursor-not-allowed' : ''} 
        ${outline ? 'rounded-lg  ring ring-primary  !bg-transparent !text-primary' : ''} 
        ${icon ? 'rounded-full h-10 w-10' : ''}
        ${className}
        `}
      onClick={!disabled && onClick}
      {...props}
      ref={ref}
    >
      <Comp
        className={`flex justify-center items-center ${disabled ? 'opacity-70 cursor-not-allowed' : ''}`}
        {...props}
      >
        {leftIcon && leftIcon}
        {icon ? icon : <span className="mx-1">{children}</span>}
        {rightIcon && rightIcon}
      </Comp>
    </button>
  );
}

export default forwardRef(Button);
