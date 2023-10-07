import { useState } from 'react';
import { signUp } from '../../apis/auth/signUp';

const SignupForm = () => {
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
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={form.username} onChange={handleChange} />
      <input type="password" name="password" value={form.password} onChange={handleChange} />
      <button type="submit">회원가입</button>
    </form>
  );
};

export default SignupForm;
