import { Handler } from 'express';
import { verifyAndRenewToken } from '@/utils/jwt';

const handler: Handler = async (req, res) => {
  const { accessToken } = req;
  const { refreshToken } = req.cookies;

  const renewed = verifyAndRenewToken(accessToken ?? '', refreshToken);

  if (renewed.result === 'fail') {
    res.clearCookie('refreshToken');
    return res.status(401).json('Invalid RefreshToken');
  }

  res.json({
    accessToken: renewed.accessToken,
    username: renewed.payload.username,
  });
};

export default handler;
