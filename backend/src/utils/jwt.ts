import jwt from 'jsonwebtoken';

const JWT_SECRET = 'jwt_secret_for_test';

export const signToken = (tokenType: 'accessToken' | 'refreshToken', payload: { username: string }) => {
  const expiresIn = tokenType === 'accessToken' ? '1000' : '5000';

  return jwt.sign(payload, JWT_SECRET, { expiresIn });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
