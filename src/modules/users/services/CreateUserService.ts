import { hash } from 'bcryptjs';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';

import User from '@modules/users/infra/typeorm/entities/User';

interface IRequest {
  name: string,
  email: string,
  password: string,
}

class CreateUserservice {
  constructor(private usersRepository: IUsersRepository){}

  public async execute({ name, email, password }: IRequest): Promise<User>{
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if(checkUserExists) {
      throw new AppError('Email address already used.', 400);
    }

    const hashedPassword = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }

}

export default CreateUserservice;
