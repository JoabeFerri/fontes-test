import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import fjwt from '@fastify/jwt';
import swagger from '@fastify/swagger';
import {withRefResolver } from 'fastify-zod';
import userRoutes from "./modules/user/user.route";
import projectRoutes from "./modules/project/project.route";

import { userSchemas } from "./modules/user/user.schema";
import { projectSchemas } from "./modules/project/project.schema";
import {version} from '../package.json'

import cors from '@fastify/cors'

export const server = Fastify({ jsonShorthand: true});

declare module 'fastify'{
    export interface FastifyInstance {
        authenticate: any;
    }
}

declare module "@fastify/jwt" {
    interface FastifyJWT {
        user: {
            id: number,
            username: string,
            name: string
        }
    }
}

server.register(fjwt, {
    secret: 'segredinho',
})

server.decorate('authenticate', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        await request.jwtVerify();
    } catch (e) {
        return reply.send(e)
    }
})

server.get('/healthcheck', async function () {
    return { status: "OK"};
})

async function main(){
    for(const schema of [...userSchemas, ...projectSchemas]){
        server.addSchema(schema);
    }

    server.register(
        swagger,
        withRefResolver({
            routePrefix:'/docs',
            exposeRoute: true,
            staticCSP: true,
            openapi: {
                info: {
                    title: 'minha API',
                    description: "API for some projects",
                    version
                }
            }

        })
    )

    
    server.register(userRoutes, {prefix: 'api/users'})
    server.register(projectRoutes, {prefix: 'api/projects'})

    server.register(cors, {
        origin: '*',
        optionsSuccessStatus: 200,
        allowedHeaders: " ",
    })


    try {
        await server.listen(3001, "0.0.0.0");

        console.log('Servidor iniciou em http://localhost:3001');
    } catch (e) {
        console.error(e);
        process.exit(1);
    }

}

main()
