import { FastifyRequest } from "fastify";

export async function authenticateToken(request: FastifyRequest) {
    await request.jwtVerify()
}