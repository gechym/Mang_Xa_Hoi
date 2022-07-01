import { XIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import Button from './Button';
import toast from 'react-hot-toast';

export const pushToast = (
  content = 'Create interactive, realistic prototypes that work like the actual digital product.',
  image = 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png',
  to = '/',
) => {
  toast.custom((t) => <ToastNotification t={t} content={content} image={image} to={to} />, {
    duration: 8000,
  });
};

const ToastNotification = ({ t, content, image, to }) => {
  const getClassBgTheme = () =>
    'dark:bg-darkSecondary dark:text-textPrimaryDark bg-lightSecondary text-textPrimaryLight';

  const getClassHoverTheme = () => 'hover:dark:bg-darkBtn hover:bg-lightBtn ';

  const getClassRingTheme = () => 'ring-[#ced0d4] dark:ring-[#2f3031]';

  return (
    <div
      className={`${t.visible ? 'animate-enter' : 'animate-leave'} 
        max-w-[280px] w-[280px] min-h-[130px] p-2
        ${getClassBgTheme()}
        shadow-lg 
        rounded-lg 
        pointer-events-auto 
        ring-1 
        ring-black 
        ring-opacity-5 
        transition-all`}
    >
      <div className="flex items-center justify-between h-5 w-full ">
        <h1 className="text-base font-[500]">Thông báo mới</h1>
        <Button
          onClick={() => toast.dismiss(t.id)}
          className={'w-[28px] h-[28px] p-0 m-0'}
          icon={<XIcon className="w-4 h-4" />}
        />
      </div>
      <div
        className={`
          flex  gap-2 mt-2 p-2 
          rounded-lg cursor-pointer
          ${getClassHoverTheme()}`}
      >
        <img
          className={`h-14 w-14 rounded-full  ring-2 ${getClassRingTheme()}  ring-opacity-90`}
          src={image}
          alt="avtar"
        />
        <Link to={to} onClick={() => toast.dismiss(t.id)} className="text-sm">
          {content}
        </Link>
      </div>
    </div>
  );
};
export default ToastNotification;

// import toast, { Toaster, useToaster } from 'react-hot-toast';

// const Notifications = () => {
//   const { toasts, handlers } = useToaster();
//   const { startPause, endPause, calculateOffset, updateHeight } = handlers;
//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: 8,
//         left: 8,
//       }}
//       onMouseEnter={startPause}
//       onMouseLeave={endPause}
//     >
//       {toasts.map((toast) => {
//         const offset = calculateOffset(toast, {
//           reverseOrder: false,
//           gutter: 8,
//         });
//         const ref = (el) => {
//           if (el && !toast.height) {
//             const height = el.getBoundingClientRect().height;
//             updateHeight(toast.id, height);
//           }
//         };
//         return (
//           <div
//             key={toast.id}
//             ref={ref}
//             style={{
//               position: 'absolute',
//               width: '200px',
//               background: 'papayawhip',
//               transition: 'all 0.5s ease-out',
//               opacity: toast.visible ? 1 : 0,
//               transform: `translateY(${offset}px)`,
//             }}
//             {...toast.ariaProps}
//           >
//             {toast.message}
//           </div>
//         );
//       })}
//     </div>
//   );
// };
