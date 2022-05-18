import { model, Schema } from 'mongoose';
import UserInterface from './user.interface';

const UserSchema = new Schema<UserInterface>({
  name: {
    type: String,
    required: true,
  },
  firstSurname: {
    type: String,
    required: true,
  },
  secondSurname: {
    type: String,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    dropDups: true, // Drop Dups ensures dropping duplicates
  },
  password: {
    type: String,
    require: true,
    default: '1234',
  },
});

export default model<UserInterface>('User', UserSchema);
