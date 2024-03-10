import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '@/contexts/AuthContext';
import { Helmet } from 'react-helmet-async';

const Authorization = () => {
  const { isLoading, isLoggedIn } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return <div>로그인 상태 확인중...</div>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/signin" replace state={{ redirectFrom: location }} />;
  }

  return (
    <>
      <Helmet>
        <title>Authorization Layout</title>
      </Helmet>
      <Outlet />
    </>
  );
};

export default Authorization;
