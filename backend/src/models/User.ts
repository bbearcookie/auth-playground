import { Schema, model, InferSchemaType } from 'mongoose';

const schema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  salt: { type: String, required: true },
});

export type IUser = InferSchemaType<typeof schema>;

const User = model<IUser>('User', schema);

export default User;
