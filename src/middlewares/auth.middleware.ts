export async function authMiddleware(request, reply) {
  const email = request.headers["email"];

  if (!email) {
    reply.status(401).send({
      message: "Email is required",
    });
  }
}
