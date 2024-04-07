import { FastifyInstance } from "fastify";
import { ContactUseCase } from "../usecases/contact.usecase";
import { IContact } from "../interfaces/contact.interface";
import { authMiddleware } from "../middlewares/auth.middleware";

export async function ContactRoutes(fastify: FastifyInstance) {
  const contactUseCase = new ContactUseCase();

  fastify.addHook("preHandler", authMiddleware);

  fastify.post<{ Body: IContact }>("/", async (request, reply) => {
    const { name, email, phone, userId } = request.body;
    const { userEmail } = request.headers;
    try {
      const response = await contactUseCase.create({
        name,
        email,
        phone,
        userId,
        userEmail,
      });

      return response;
    } catch (error) {
      reply.send(error);
    }
  });
}
