import { Menu, Transition } from '@headlessui/react';
import { Fragment, memo } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

function Dropdown({ items, className, title = 'menu' }) {
  const handleRenderItem = () => {
    return items?.map((item, index) => {
      let Comp = 'button';
      const Icon = item.icon;

      let props = {
        onClick: item.onClick,
      };

      if (item.to) {
        Comp = Link;
        props = { ...props };
      } else if (item.href) {
        Comp = 'a';
        props = {
          ...props,
          target: item.target,
        };
      }

      return (
        <Menu.Item key={index}>
          {({ active }) => (
            <Comp
              {...props}
              {...item}
              className={`flex items-scenter rounded-sm py-2 px-1 text-sm  ${
                active ? 'bg-lightBtn dark:bg-darkBtn' : ''
              }`}
            >
              <Icon className=" h-6 w-6 mr-1 text-violet-200 hover:text-violet-100" aria-hidden="true" />
              {item.lable}
            </Comp>
          )}
        </Menu.Item>
      );
    });
  };

  return (
    <div className={`text-right w-max ${className ? className : ''}`}>
      <Menu as="div" className="relative inline-block">
        <div>
          <Menu.Button
            className="
              inline-flex w-full justify-center rounded-md 
              bg-lightBtn text-textPrimaryLight
              dark:bg-darkBtn px-4 py-2 text-sm font-medium  dark:text-textPrimaryDark 
              hover:bg-lightHoverIcon dark:hover:bg-darkHoverIcon
             "
          >
            {title}
            <ChevronDownIcon
              className=" h-5 w-5 ml-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className="
              absolute flex flex-col right-0 mt-2 w-56 py-2 px-1
              origin-top-right rounded-md bg-lightSecondary dark:bg-darkSecondary
              shadow-lg ring-1 ring-black
              ring-opacity-5
              focus:outline-none"
          >
            {handleRenderItem()}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default memo(Dropdown);
