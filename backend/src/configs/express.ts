import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
require('express-async-errors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const whitelist = ['http://localhost:5173', 'http://127.0.0.1:5173', 'https://www.bearcookiestudy.site'];

app.use(
  cors({
    origin: (origin, callback) => {
      if (origin && whitelist.indexOf(origin) !== -1) callback(null, true);
      else callback(null, false);
    },
    credentials: true,
  })
);

app.use((req, res, next) => {
  const authorization = req.headers['authorization'];

  if (authorization?.startsWith('Bearer ')) {
    req.accessToken = authorization.split(' ')[1];
  }

  next();
});

export default app;
