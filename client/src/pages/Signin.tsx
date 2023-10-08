import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signIn } from '../../apis/auth/signIn';

const Signin = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = await signIn(form);
    console.log(data);
  };

  return (
    <>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={form.username} onChange={handleChange} />
        <input type="password" name="password" value={form.password} onChange={handleChange} />
        <button type="submit">로그인</button>
      </form>
      <Link to="/signup">회원가입 하러가기</Link>
    </>
  );
};

export default Signin;
