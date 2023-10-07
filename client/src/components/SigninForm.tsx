import { useState } from 'react';
import { signIn } from '../../apis/auth/signIn';

const SigninForm = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signIn(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={form.username} onChange={handleChange} />
      <input type="password" name="password" value={form.password} onChange={handleChange} />
      <button type="submit">로그인</button>
    </form>
  );
};

export default SigninForm;
