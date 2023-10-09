import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '@/contexts/AuthContext';
import Header from '@/components/Header';

const Root = () => {
  const { handleCheck } = useContext(AuthContext);

  useEffect(() => {
    handleCheck();
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Root;
