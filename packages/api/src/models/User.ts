import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser {
  username: string;
  password: string;
}

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

UserSchema.pre('save', async function (next) {
  if (this.isModified('password') || this.isNew) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

export const User = model<IUser>('User', UserSchema);
