import React, { FC, ReactNode } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

export interface ReqAuthProps {
  children: ReactNode;
}

export const ReqAuth: FC<ReqAuthProps> = ({ children }: ReqAuthProps) => {
  const location = useLocation();
  const auth = false;

  if (!auth) {
    return <Navigate to='login' state={ { from: location.pathname } }/>;
  }
  return children as JSX.Element;
};
