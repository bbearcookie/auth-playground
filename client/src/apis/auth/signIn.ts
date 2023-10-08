import { baseInstance } from '../instance';

interface Response {
  username: string;
  accessToken: string;
}

export const signIn = async ({ username, password }: { username: string; password: string }) => {
  const res = await baseInstance.post<Response>('/auth/signIn', { username, password });

  return res.data;
};
