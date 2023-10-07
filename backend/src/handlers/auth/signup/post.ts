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

  const user = await User.create({ username, password });

  res.json(user);
};

export default handler;
