import { baseInstance } from '../instance';

export const signOut = async () => {
  const res = await baseInstance.get('/auth/signOut');

  return res.data;
};
