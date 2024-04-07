export interface IContact {
  id?: string;
  name: string;
  email: string;
  phone: string;
  userId: string;
}

export interface ContactCreate {
  name: string;
  email: string;
  phone: string;
  userId: string;
  userEmail: string;
}

export interface IContactRepository {
  create(data: IContact): Promise<IContact>;
  findContactForEmail(email: string, phone: string): Promise<IContact | null>;
}
