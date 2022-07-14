import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const Modal = ({ isOpen, setIsOpen, children, className, titel = 'titel' }) => {
  const getClassBgTheme = () =>
    'dark:bg-darkSecondary dark:text-textPrimaryDark bg-lightSecondary text-textPrimaryLight';

  const getClassRingTheme = () => 'ring-[#ced0d4] dark:ring-[#2f3031]';

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="fixed inset-0 flex items-center justify-center p-4 ">
                <div className="flex min-h-full items-center justify-center">
                  <Dialog.Panel
                    className={`
                        transform overflow-hidden rounded-md
                        ${getClassBgTheme()}
                        p-4 text-left align-middle transition-all
                        shadow-lg
                        ring-1 ring-opacity-90 ${getClassRingTheme()}`}
                  >
                    <Dialog.Title as="h1" className=" text-lg text-center font-medium leading-6 text-gray-900">
                      {titel}
                    </Dialog.Title>
                    <div
                      className={`mt-2 min-h-[200px] min-w-[200px] max-h-[80vh] max-w-[90vw] overflow-x-auto ${
                        className ? className : ''
                      }`}
                    >
                      {children}
                    </div>
                  </Dialog.Panel>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
