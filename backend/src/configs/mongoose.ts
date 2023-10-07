import mongoose from 'mongoose';

const URI = `mongodb://localhost:27017/auth-test`;

mongoose
  .connect(URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));
