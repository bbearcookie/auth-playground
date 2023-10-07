import express from 'express';
import cors from 'cors';
require('express-async-errors');

const whitelist = ['http://localhost:5173'];

const app = express();

app.use(
  cors({
    origin: (origin, callback) => {
      if (origin && whitelist.indexOf(origin) !== -1) callback(null, true);
      else callback(null, false);
    },
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;
