import { Schema, model, InferSchemaType } from 'mongoose';

const schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
});

export type IUser = InferSchemaType<typeof schema>;

const User = model('User', schema);

export default User;
