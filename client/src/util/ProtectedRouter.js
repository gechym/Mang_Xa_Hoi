import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelecter } from '~/redux/selecter';
import toast from 'react-hot-toast';

const ProtectedRouter = ({ children }) => {
  const { user } = useSelector(userSelecter);

  if (!user) {
    toast.error('Vui lòng đăng nhập để tiếp tục');
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRouter;
