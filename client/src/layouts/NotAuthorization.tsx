import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '@/contexts/AuthContext';

const NotAuthorization = () => {
  const { isLoading, isLoggedIn } = useContext(AuthContext);

  if (isLoading) {
    return <div>로그인 상태 확인중...</div>;
  }

  if (isLoggedIn) {
    return (
      <div>
        <div>비회원만 볼 수 있는 페이지라 당신은 들어갈 수 없어요!</div>
        <div>로그아웃을 해주세요.</div>
        <Link to="/">메인으로 가기</Link>
      </div>
    );
  }

  return <Outlet />;
};

export default NotAuthorization;
