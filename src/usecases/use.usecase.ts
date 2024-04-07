import UserRepository from "../repositories/user.repository";

import { IUser, IUserRepository } from "../interfaces/user.interface";

export class UserUseCase {
  private userRepository: IUserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async create({ name, email }: IUser) {
    const response = await this.userRepository.create({ name, email });
    return response;
  }

  async getAll() {
    const response = this.userRepository.getAll();
    return response;
  }

  async getByEmail(userEmail: string) {
    const response = this.userRepository.getByEmail(userEmail);
    return response;
  }
}
