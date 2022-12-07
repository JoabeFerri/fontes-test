import { FastifyReply, FastifyRequest } from "fastify";
import { CreateProjectInput } from "./project.schema";
import { createProject, getProjects } from "./project.service";

export async function createProjectHandler(
    request: FastifyRequest<{
        Body: CreateProjectInput;
    }>    
    ){
    const project = await createProject({
        ...request.body,
        userOwner: request.user.username,
    });

    return project;
}


export async function getProjectsHandler(){
    const projects = await getProjects()

    return projects
}