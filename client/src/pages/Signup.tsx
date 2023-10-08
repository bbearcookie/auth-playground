import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signUp } from '../../apis/auth/signUp';

const Signup = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signUp(form);
  };

  return (
    <>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={form.username} onChange={handleChange} />
        <input type="password" name="password" value={form.password} onChange={handleChange} />
        <button type="submit">회원가입</button>
      </form>
      <Link to="/signin">로그인 하러가기</Link>
    </>
  );
};

export default Signup;
