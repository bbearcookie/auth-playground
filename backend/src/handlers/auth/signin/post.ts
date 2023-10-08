import { Handler } from 'express';
import { z } from 'zod';
import { makeSalt, encryptText } from '@/utils/encrypt';
import { signToken } from '@/utils/jwt';
import User from '@/models/User';

const requestSchema = z.object({
  body: z.object({
    username: z.string(),
    password: z.string(),
  }),
});

type RequestData = z.infer<typeof requestSchema>;

const handler: Handler = async (req, res) => {
  const { body } = req as unknown as RequestData;
  const { username, password } = body;

  const user = await User.findOne({ username });
  if (!user) return res.status(404).json('유저를 찾을 수 없습니다.');

  const encryptedPassword = encryptText(password, user.salt);
  if (encryptedPassword !== user.password) return res.status(401).json('비밀번호가 다릅니다.');

  const payload = { username: user.username };

  const accessToken = signToken('accessToken', payload);
  const refreshToken = signToken('refreshToken', payload);

  res.json({ username: user.username, accessToken });
};

export default handler;
