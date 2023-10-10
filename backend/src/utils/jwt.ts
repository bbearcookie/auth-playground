import jwt from 'jsonwebtoken';

export interface Payload {
  username: string;
}

const JWT_SECRET = 'jwt_secret_for_test';
const ACCESS_TOKEN_EXPIRES_IN = 3;
const REFRESH_TOKEN_EXPIRES_IN = 600;

export const signToken = (tokenType: 'accessToken' | 'refreshToken', payload: Payload) => {
  const expiresIn = tokenType === 'accessToken' ? ACCESS_TOKEN_EXPIRES_IN : REFRESH_TOKEN_EXPIRES_IN;

  return jwt.sign(payload, JWT_SECRET, { expiresIn });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};

export const verifyAndRenewToken = (
  accessToken: string,
  refreshToken: string
):
  | {
      result: 'success';
      accessToken: string;
      refreshToken: string;
      payload: Payload;
    }
  | {
      result: 'fail';
    } => {
  try {
    const payload = verifyToken(accessToken) as Payload;

    console.log('아직 accessToken이 유효한 상태임.');

    return { result: 'success', accessToken, refreshToken, payload };
  } catch (err) {
    try {
      const payload = verifyToken(refreshToken) as Payload;
      const newAccessToken = signToken('accessToken', { username: payload.username });

      console.log('accessToken이 만료되어서 refreshToken으로 accessToken을 갱신함.');

      return { result: 'success', accessToken: newAccessToken, refreshToken, payload };
    } catch (err) {
      console.log('refreshToken도 만료되어서 로그아웃됨.');

      return { result: 'fail' };
    }
  }
};
