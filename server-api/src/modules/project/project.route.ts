import { prisma } from "@prisma/client";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { parse } from "path";
import { z } from "zod";
import { authenticateToken } from "../../plugins/authentucateToken";
import { createProjectHandler, getProjectsHandler } from "./project.controller";
import { $ref } from "./project.schema";

async function projectRoutes(server: FastifyInstance){
    server.post('/create', {
        
        preHandler: [server.authenticate],
        schema: {
            body: $ref('createProjectSchema'),
            response: {
                201: $ref('projectResponseSchema')
            },
        },
    }, createProjectHandler)


    server.get('/', {
        schema: {
            response: {
                200: $ref('projectsResponseSchema')
            }
        }
    }, getProjectsHandler)

    server.get('/projects', {
        onRequest: [authenticateToken]
    }, async (resquest: FastifyRequest) => {
        

    })
}

export default projectRoutes