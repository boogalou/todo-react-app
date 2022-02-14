import React, { FC, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../hooks/reduxHooks';
import { AppState } from '../init/store';

export interface ReqAuthProps {
  children: ReactNode;
}

const ReqAuth: FC<ReqAuthProps> = ({ children }: ReqAuthProps) => {
  const location = useLocation();
  const isAuth = useAppSelector((state: AppState) => state.auth.isAuth)

  console.log(isAuth);

  if (!isAuth) {
    console.log(isAuth);
    return <Navigate to='/login' replace state={ { from: location.pathname } }/>;
  }
  return children as JSX.Element;
};
