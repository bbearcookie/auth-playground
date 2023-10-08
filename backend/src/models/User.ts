import { Schema, model, InferSchemaType } from 'mongoose';

const schema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  salt: { type: String, required: true },
});

export type User = InferSchemaType<typeof schema>;

const UserModel = model('User', schema);

export default UserModel;
