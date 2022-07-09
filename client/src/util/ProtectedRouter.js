import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelecter } from '~/redux/selecter';
import LoadingPage from '~/page/loadingPage/LoadingPage';

const NavigateLogin = () => {
  return <Navigate to="/login" />;
};

const spleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const LoadableComponent = lazy(async () => {
  await spleep(6000);
  return { default: NavigateLogin };
});

const ProtectedRouter = ({ children }) => {
  const { user } = useSelector(userSelecter);

  return user ? (
    children
  ) : (
    <Suspense fallback={<LoadingPage />}>
      <LoadableComponent />
    </Suspense>
  );
};

export default ProtectedRouter;
