import Fastify, { FastifyInstance } from "fastify";

const fastify: FastifyInstance = Fastify({
  logger: true
})

fastify.get('/', async function handler (request, reply) {
  return { hello: 'world' }
})

try {
  fastify.listen({ port: 8080});
} catch (error) {
  fastify.log.error(error) 
}