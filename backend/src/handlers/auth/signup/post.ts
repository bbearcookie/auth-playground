import { Handler } from 'express';
import { z } from 'zod';
import UserModel, { User } from '@/models/User';
import { makeSalt, encryptText } from '@/utils/encrypt';

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

  const salt = makeSalt(32);
  const encryptedPassword = encryptText(password, salt);

  const alreadyUser = await UserModel.findOne({ username });
  if (alreadyUser) return res.status(409).json('이미 존재하는 유저입니다.');

  const newUser: User = {
    username,
    password: encryptedPassword,
    salt,
  };

  await UserModel.create(newUser);

  res.json({ username: newUser.username });
};

export default handler;
