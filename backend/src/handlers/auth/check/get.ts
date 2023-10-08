import { Handler } from 'express';
import { verifyAndRenewToken } from '@/utils/jwt';

const handler: Handler = async (req, res) => {
  const { accessToken } = req;
  const { refreshToken } = req.cookies;

  if (!accessToken) return res.status(401).json('Not Found AccessToken');

  const renewed = verifyAndRenewToken(accessToken, refreshToken);
  if (renewed.result === 'fail') return res.status(401).json('Invalid RefreshToken');

  res.json({
    accessToken: renewed.accessToken,
    refreshToken: renewed.refreshToken,
    username: renewed.payload.username,
  });
};

export default handler;
