import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userSelecter } from '~/redux/selecter';
import { refresh } from '~/redux/thunk/userThunk';

const ProtectedRouter = ({ children }) => {
  const { user } = useSelector(userSelecter);

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRouter;
