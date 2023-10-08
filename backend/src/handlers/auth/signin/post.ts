import { Handler } from 'express';
import { z } from 'zod';
import User from '@/models/User';

const requestSchema = z.object({
  body: z.object({
    username: z.string(),
    password: z.string(),
  }),
});

type RequestData = z.infer<typeof requestSchema>;

const handler: Handler = async (req, res, next) => {
  const { body } = req as unknown as RequestData;
  const { username, password } = body;

  const user = await User.findOne({ username, password });
  if (!user) return res.status(404).json('유저를 찾을 수 없습니다.');

  res.json(user);
};

export default handler;
