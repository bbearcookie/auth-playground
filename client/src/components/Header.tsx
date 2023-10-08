import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { check } from '../apis/auth/check';

const Header = () => {
  const { accessToken, username, handleLogin } = useContext(AuthContext);

  const handleCheck = async () => {
    try {
      const data = await check(accessToken);

      handleLogin(data.accessToken, data.username);
      alert(`${data.username} 님은 로그인 중이십니다.`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header>
      <h1>못생긴 헤더</h1>
      <div>{username ? `어서오세요 ${username}님` : `당신은 로그인을 안하셨군요!`}</div>
      <button onClick={handleCheck}>로그인 확인</button>
    </header>
  );
};

export default Header;
