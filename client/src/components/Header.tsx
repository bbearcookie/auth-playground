import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { check } from '../apis/auth/check';

const Header = () => {
  const { accessToken, username, handleLogin } = useContext(AuthContext);

  const handleCheck = async () => {
    const response = await check(accessToken);
    console.log(response);
  };

  return (
    <header>
      <h1>못생긴 헤더</h1>
      <div>{username ? `어서오세요 ${username}님` : `당신은 로그인을 안하셨군요!`}</div>
      {username && <button onClick={handleCheck}>로그인 확인</button>}
    </header>
  );
};

export default Header;
