import { baseInstance } from '../instance';

export const signUp = ({ username, password }: { username: string; password: string }) => {
  return baseInstance.post('/auth/signUp', { username, password });
};
