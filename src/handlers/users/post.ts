import { Handler } from 'express';
import User from '@/models/User';

const handler: Handler = async (req, res) => {
  const user = new User({
    name: 'bear',
    email: 'bill@initech.com',
    avatar: 'https://i.imgur.com/dM7Thhn.png',
  });

  await user.save();

  res.json({ message: 'User created!' });
};

export default handler;
