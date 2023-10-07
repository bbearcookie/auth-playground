import mongoose from 'mongoose';

const URI = `${process.env.MONGO_LOCAL_URI}/${process.env.DATABASE_NAME}`;

mongoose
  .connect(URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));
