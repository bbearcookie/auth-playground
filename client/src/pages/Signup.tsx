import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AxiosError } from 'axios';
import { signUp } from '../apis/auth/signUp';

const Signup = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = await signUp(form);

      setMessage(`가입에 성공하셨습니다 ${data.username}님!`);
    } catch (err) {
      if (err instanceof AxiosError) {
        setMessage(err.response?.data);
      }
    }
  };

  return (
    <>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={form.username} onChange={handleChange} />
        <input type="password" name="password" value={form.password} onChange={handleChange} />
        <button type="submit">회원가입</button>
      </form>
      <div>{message}</div>
      <div>
        <Link to="/signin">로그인 하러가기</Link>
      </div>
      <div>
        <Link to="/">메인으로 가기</Link>
      </div>
    </>
  );
};

export default Signup;
