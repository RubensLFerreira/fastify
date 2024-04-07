import { prisma } from "../database/prisma-client";
import { IUser, IUserRepository } from "../interfaces/user.interface";

export default class UserRepository implements IUserRepository {
  async create(data: IUser): Promise<IUser> {
    const userExists = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (userExists) {
      throw new Error("Email is being used by a user");
    }

    const response = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
      },
    });
    return response;
  }

  async getAll(): Promise<IUser[]> {
    const response = await prisma.user.findMany();
    return response;
  }

  async getByEmail(email: string): Promise<IUser | null> {
    const response = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    return response;
  }
}
