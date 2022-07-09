import RightLayout from '~/layout/components/RightLayout';
import LeftLayout from '~/layout/components/LeftLayout';
import MainLayout from '~/layout/components/mainLayout';
import Header from '~/layout/components//Header';

function DefaultLayout({ children }) {
  return (
    <div
      className="
    mobile:dark:bg-dark 
    laptop:dark:bg-dark 
    tablet:dark:bg-dark 
    bg-light
    text-textPrimaryLight dark:text-textPrimaryDark
    mobile:grid-cols-1 
    mobile:grid-rows-[1fr] 
    tablet:grid-cols-[1.5fr_1.5fr_1.4fr] 
    tablet:grid-rows-[50px_1fr_1fr] 
    laptop:grid-cols-[360px_1fr_360px]
    laptop:grid-rows-[56px_1fr_1fr] 
    grid min-h-screen gap-2 p-2"
    >
      {/* Header */}

      <Header />

      <RightLayout>Thanh chức năng</RightLayout>

      <MainLayout>{children}</MainLayout>

      <LeftLayout>Thanh user</LeftLayout>
    </div>
  );
}

export default DefaultLayout;
