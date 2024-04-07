import Fastify, { FastifyInstance } from "fastify";

import { userRoutes } from "./routes/user.routes";
import { ContactRoutes } from "./routes/contact.routes";

export class Main {
  private server: FastifyInstance;

  constructor() {
    this.server = Fastify({ logger: true });
  }

  public async start() {
    try {
      await this.server.listen({ port: 8080 });
    } catch (error) {
      this.server.log.error(error);
    }
  }

  public async register() {
    this.server.register(userRoutes, { prefix: "/user" });
    this.server.register(ContactRoutes, { prefix: "/contact" });
  }
}
