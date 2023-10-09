import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const OnlyUser = () => {
  const { isLoading, isLoggedIn } = useContext(AuthContext);

  if (isLoading) {
    return <div>로그인 상태 확인중...</div>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/signin" />;
  }

  return (
    <div>
      <h1>여긴 회원만 볼 수 있는 페이지입니다.</h1>
      <div>
        <Link to="/">메인으로 가기</Link>
      </div>
    </div>
  );
};

export default OnlyUser;
