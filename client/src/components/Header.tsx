import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Header = () => {
  const { accessToken, username, handleLogin } = useContext(AuthContext);

  return (
    <header>
      <h1>못생긴 헤더</h1>
      <div>{username ? `어서오세요 ${username}님` : `당신은 로그인을 안하셨군요!`}</div>
    </header>
  );
};

export default Header;
