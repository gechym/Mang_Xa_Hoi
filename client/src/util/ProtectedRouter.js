import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelecter } from '~/redux/selecter';

const ProtectedRouter = ({ children }) => {
  const { user } = useSelector(userSelecter);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRouter;
