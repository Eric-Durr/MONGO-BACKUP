import { Document } from 'mongoose';

interface UserInterface extends Document {
  name: string,
  firstSurname: string,
  secondSurname: string,
  age: number,
  email: string,
  password: string,
}

export default UserInterface;
