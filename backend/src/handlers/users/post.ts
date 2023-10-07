import { Handler } from 'express';
import User from '@/models/User';
import { z } from 'zod';

const requestSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    avatar: z.string().url(),
  }),
});

type RequestData = z.infer<typeof requestSchema>;

const handler: Handler = async (req, res) => {
  const { body } = req as unknown as RequestData;
  const { name, email, avatar } = body;

  const user = new User({
    name,
    email,
    avatar,
  });

  await user.save();

  res.json({ message: 'User created!' });
};

export default handler;
