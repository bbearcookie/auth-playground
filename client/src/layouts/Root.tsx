import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import { Helmet } from 'react-helmet-async';

const Root = () => {
  const { handleCheck } = useContext(AuthContext);

  useEffect(() => {
    handleCheck();
  }, []);

  return (
    <>
      <Helmet>
        <title>Root Layout</title>
      </Helmet>
      <Header />
      <Outlet />
    </>
  );
};

export default Root;
