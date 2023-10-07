import { Handler } from 'express';
import User from '@/models/User';

const handler: Handler = async (req, res) => {
  const users = await User.find();

  res.json(users);
};

export default handler;
