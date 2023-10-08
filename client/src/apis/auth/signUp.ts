import { baseInstance } from '../instance';

interface Response {
  username: string;
}

export const signUp = async ({ username, password }: { username: string; password: string }) => {
  const res = await baseInstance.post<Response>('/auth/signUp', { username, password });

  return res.data;
};
