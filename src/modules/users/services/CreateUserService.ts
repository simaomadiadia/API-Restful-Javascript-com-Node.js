import { getCustomRepository, getRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import AppError from '@shared/errors/AppError';

interface IRquest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: IRquest): Promise<User> {
    // get the user repository
    const usersRepository = getCustomRepository(UsersRepository);

    //check if email already exist
    const emailExists = await usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already used');
    }

    const user = usersRepository.create({
      name,
      email,
      password,
    });

    return user;
  }
}

export default CreateUserService;


