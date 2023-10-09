import { Handler } from 'express';

const handler: Handler = async (req, res) => {
  res.clearCookie('refreshToken');

  res.json('로그아웃 되었습니다.');
};

export default handler;
