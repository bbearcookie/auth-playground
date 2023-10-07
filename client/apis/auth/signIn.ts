import { baseInstance } from '../instance';

export const signIn = ({ username, password }: { username: string; password: string }) => {
  return baseInstance.post('/auth/signIn', { username, password });
};
