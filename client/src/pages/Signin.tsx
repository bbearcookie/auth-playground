import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AxiosError } from 'axios';
import { signIn } from '../apis/auth/signIn';
import { AuthContext } from '../contexts/AuthContext';

const Signin = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const { setUser } = useContext(AuthContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = await signIn(form);

      setUser(data.accessToken, data.username);
      setMessage(`어서오세요 ${data.username}님! 당신의 토큰은 ${data.accessToken}`);
    } catch (err) {
      if (err instanceof AxiosError) {
        setMessage(err.response?.data);
      }
    }
  };

  return (
    <>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={form.username} onChange={handleChange} />
        <input type="password" name="password" value={form.password} onChange={handleChange} />
        <button type="submit">로그인</button>
      </form>
      <div>{message}</div>
      <div>
        <Link to="/signup">회원가입 하러가기</Link>
      </div>
      <div>
        <Link to="/">메인으로 가기</Link>
      </div>
    </>
  );
};

export default Signin;
