import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create.dto';
import { UpdateUserDTO } from './dto/update.dto';
// import { IUser } from './interfaces';
import { UserRepository } from './repository';
import { User } from './schemas';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UserRepository) {}

  async create(data: CreateUserDTO): Promise<User> {
    return this.repository.create(data);
  }

  async update(userId: string, data: UpdateUserDTO): Promise<User> {
    return this.repository.findOneAndUpdate({ id: userId }, data);
  }

  async fetchOne(userId: string): Promise<User> {
    return this.repository.findOne({ _id: userId });
  }

  async fetchByCredential(credential: string): Promise<User> {
    return this.repository.findOne({
      $or: [
        { 'email.address': credential },
        { 'phone.address': credential },
        { username: credential },
      ],
    });
  }

  async fetchAll(userId: string): Promise<User[]> {
    return this.repository.find({ userId });
  }

  async deleteById(userId: string): Promise<User> {
    return this.repository.deleteById(userId);
  }
}
