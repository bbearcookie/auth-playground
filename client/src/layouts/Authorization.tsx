import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Authorization = () => {
  const { isLoading, isLoggedIn } = useContext(AuthContext);

  if (isLoading) {
    return <div>로그인 상태 확인중...</div>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/signin" />;
  }

  return <Outlet />;
};

export default Authorization;
