import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class UserService implements OnModuleInit {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async onModuleInit() {
    const username = process.env.ADMIN_USERNAME as string | undefined;
    const password = process.env.ADMIN_PASSWORD as string | undefined;
    if (!username || !password) {
      return;
    }
    const user = await this.userModel.findOne({ username });
    if (user) {
      console.log('admin has already created');
      return;
    }
    await this.userModel.create({ username, password });
  }

  async create(user: User): Promise<UserDocument> {
    return this.userModel.create(user);
  }

  async findByUsername(username: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ username }).exec();
  }
}
