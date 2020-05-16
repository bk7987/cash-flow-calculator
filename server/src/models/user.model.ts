import mongoose from 'mongoose';

import { hashPassword } from '../util/password';

interface CreateUserDto {
  email: string,
  password: string
}

interface User extends mongoose.Document {
  email: string,
  password: string
}

interface UserModel extends mongoose.Model<User> {
  build(userDto: CreateUserDto): User;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  toJSON: {
    transform(doc, ret) {
      const id = ret._id.toString();
      delete ret._id;
      delete ret.__v;
      delete ret.password;

      return {
        object: 'user',
        id,
        ...ret
      }
    }
  }
});

userSchema.pre('save', async function(done) {
  if (this.isModified('password')) {
    const hashed = await hashPassword(this.get('password'));
    this.set('password', hashed);
  }
  done();
});


const UserRepository = mongoose.model<User, UserModel>('UserRepository', userSchema);

export { 
  User,
  CreateUserDto,
  UserRepository 
};