import { FastifyInstance, FastifyRequest } from "fastify";
import { authenticateToken } from "../../plugins/authentucateToken";
import { getUsersHandler, loginHandler, registerUserHandler } from "./user.controller";
import { $ref } from "./user.schema";

async function userRoutes(server: FastifyInstance){

server.post('/',{
    schema: {
        body: $ref('createUserSchema'),
        response: {
            201: $ref('createUserResponseSchema')
        }
    }
}, registerUserHandler
);

server.post('/login', {
    schema: {
        body: $ref('loginSchema'),
                response: {
                    200: $ref('loginResponseSchema')
                }
    }
}, loginHandler)

server.get('/',{
    preHandler: [server.authenticate]
}, getUsersHandler)

server.get('/me',
    {
        onRequest: [authenticateToken]
    }, async (request: FastifyRequest) => {

    return { user: request.user,}
})

}

export default userRoutes