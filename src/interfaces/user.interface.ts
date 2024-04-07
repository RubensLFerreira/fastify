export interface IUser {
  id?: string;
  name: string;
  email: string;
}

export interface IUserRepository {
  create(data: IUser): Promise<IUser>;
  getByEmail(userEmail: string): Promise<IUser | null>;
  getAll(): Promise<IUser[]>;
  // update(data: IUser): Promise<IUser>;
  // delete(id: Pick<IUser, "id">): Promise<IUser>;
}
