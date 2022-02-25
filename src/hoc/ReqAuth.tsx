import React, { FC, } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/reduxHooks';

export interface ReaAuthProps {
  children: JSX.Element;
}

const PrivateRoute: FC<ReaAuthProps> = ({ children }: ReaAuthProps) => {

  const location = useLocation();
  const isFetching = useAppSelector((state) => state.auth.isFetch)
  const isAuth = !!localStorage.getItem('token');

  if (isFetching) {
    return <p>Checking authefication..</p>;
  }
  console.log(location);
  return !isAuth ? <Navigate to='/login' state={{ from: location }} replace /> : children

};

export default PrivateRoute;