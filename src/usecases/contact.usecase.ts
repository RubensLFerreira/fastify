import { IUserRepository } from "../interfaces/user.interface";
import ContactRepository from "../repositories/contact.repository";
import UserRepository from "../repositories/user.repository";

import {
  ContactCreate,
  IContact,
  IContactRepository,
} from "../interfaces/contact.interface";

export class ContactUseCase {
  private contactRepository: IContactRepository;
  private userRepository: IUserRepository;

  constructor() {
    this.contactRepository = new ContactRepository();
    this.userRepository = new UserRepository();
  }

  async create(data: ContactCreate): Promise<IContact> {
    const userExists = await this.userRepository.getByEmail(data.userEmail);

    if (!userExists) {
      throw new Error("User not found");
    }

    const verifyExistsContact =
      await this.contactRepository.findContactForEmail(data.email, data.phone);

    if (verifyExistsContact) {
      throw new Error("Contact already exist");
    }

    const newContact = await this.contactRepository.create(data);

    return newContact;
  }
}
