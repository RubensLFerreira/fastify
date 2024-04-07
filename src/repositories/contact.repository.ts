import { prisma } from "../database/prisma-client";
import { IContact, IContactRepository } from "../interfaces/contact.interface";

export default class ContactRepository implements IContactRepository {
  async create(data: IContact): Promise<IContact> {
    console.log(data);

    const response = await prisma.contacts.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        userId: data.userId,
      },
    });

    return response;
  }

  async findContactForEmail(
    email: string,
    phone: string
  ): Promise<IContact | null> {
    const contactExists = await prisma.contacts.findFirst({
      where: {
        OR: [{ email }, { phone }],
      },
    });

    return contactExists;
  }
}
