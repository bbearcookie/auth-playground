import jwt from 'jsonwebtoken';

export interface Payload {
  username: string;
}

const JWT_SECRET = 'jwt_secret_for_test';
const ACCESS_TOKEN_EXPIRES_IN = 60 * 1000;
const REFRESH_TOKEN_EXPIRES_IN = 60 * 60 * 1000;

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

    return { result: 'success', accessToken, refreshToken, payload };
  } catch (err) {
    try {
      const payload = verifyToken(refreshToken) as Payload;
      const newAccessToken = signToken('accessToken', payload);

      return { result: 'success', accessToken: newAccessToken, refreshToken, payload };
    } catch (err) {
      return { result: 'fail' };
    }
  }
};
