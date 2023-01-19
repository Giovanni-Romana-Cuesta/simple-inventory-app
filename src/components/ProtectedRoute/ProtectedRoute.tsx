import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { StorageKeys } from '../../models/models';

const ProtectedRoute = () => {
  const auth = localStorage.getItem(StorageKeys.LOGGED_IN);
  return auth ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoute;
