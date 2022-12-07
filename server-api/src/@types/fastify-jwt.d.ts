import fastifyJwt, { FastifyJWTOptions } from '@fastify/jwt'

declare module "@fastify/jwt" {
    interface FastifyJWT {
      user: {
        iat: number,
        username: string,
        } // user type is return type of `request.user` object
    }
  }
  