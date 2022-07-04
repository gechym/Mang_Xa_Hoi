import { XIcon } from '@heroicons/react/solid';
import React from 'react';
import { toast, Toaster, ToastBar } from 'react-hot-toast';
import Button from '~/components/Button';
import { LogoHeader } from './icons';

const MyToaster = () => {
  const getClassWithTheme = () =>
    'dark:bg-darkSecondary dark:text-textPrimaryDark bg-lightSecondary text-textPrimaryLight';

  return (
    <Toaster
      position="bottom-left"
      toastOptions={{
        className: getClassWithTheme(),
        duration: 3000,
      }}
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <>
              {icon}
              {message}
              {t.type !== 'loading' && (
                <Button
                  onClick={() => toast.dismiss(t.id)}
                  className={'w-[20px] h-[20px] p-0 m-0'}
                  icon={<XIcon className="w-3 h-3" />}
                />
              )}
            </>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
};

export default MyToaster;
