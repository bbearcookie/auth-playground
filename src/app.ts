import 'dotenv/config';
import express from 'express';
import getUsers from '@/handlers/users/get';
import postUsers from '@/handlers/users/post';
import '@/configs/mongoose';

const app = express();

app.get('/', async (req, res) => {
  res.send('Hello World!');
});

app.route('/users').get(getUsers).post(postUsers);

app.listen(5010, () => {
  console.log('Server running on port 5010');
});
