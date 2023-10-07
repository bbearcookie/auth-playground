import { Handler } from 'express';
import User from '@/models/User';

const handler: Handler = async (req, res, next) => {
  const { _id } = req.params;

  const user = await User.findOne({ _id });

  res.json(user);
};

export default handler;
