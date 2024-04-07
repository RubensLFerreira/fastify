import { FastifyInstance } from "fastify";

import { UserUseCase } from "../usecases/use.usecase";
import { IUser } from "../interfaces/user.interface";

export async function userRoutes(fastify: FastifyInstance) {
  const userUseCase = new UserUseCase();

  fastify.post<{ Body: IUser }>("/", (request, reply) => {
    const { name, email } = request.body;

    try {
      const response = userUseCase.create({ name, email });
      return response;
    } catch (error) {
      reply.send(error);
    }
  });

  fastify.get<{ Body: IUser }>("/", async (_, reply) => {
    try {
      const response = await userUseCase.getAll();
      return response;
    } catch (error) {
      reply.send(error);
    }
  });

  fastify.post<{ Body: IUser }>("/search-email", async (request, reply) => {
    const { email } = request.body;

    try {
      const response = await userUseCase.getByEmail(email);
      return response;
    } catch (error) {
      reply.send(error);
    }
  });
}
