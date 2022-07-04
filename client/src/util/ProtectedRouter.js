import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelecter } from '~/redux/selecter';

const ProtectedRouter = ({ children }) => {
  const { user } = useSelector(userSelecter);

  return user ? children : <Navigate to="/login" state={'/login'} />;
};

export default ProtectedRouter;
