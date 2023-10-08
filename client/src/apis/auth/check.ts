import { baseInstance } from '../instance';

interface Response {
  accessToken: string;
  username: string;
}

export const check = async (accessToken: string) => {
  const res = await baseInstance.get<Response>('/auth/check', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  return res.data;
};
