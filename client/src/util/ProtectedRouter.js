import React from 'react';
import { Navigate } from 'react-router-dom';
import Login from '~/page/login';

const userState = {
  user: true,
  loading: false,
  error: null,
};

const ProtectedRouter = ({ children }) => {
  return userState.user ? children : <Navigate to="/login" state={'/login'} />;
};

export default ProtectedRouter;
