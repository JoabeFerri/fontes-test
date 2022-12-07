import { request } from "http";
import prisma from "../../utils/prisma";
import { CreateProjectInput } from "./project.schema";

export async function createProject(data: CreateProjectInput & {userOwner: string}){
    return prisma.project.create({
        data,
    })
}

export function getProjects(){
    return prisma.project.findMany({
        select: {
            title: true,
            zipCode: true,
            cost: true,
            id: true,
            createdAt: true,
            updatedAt: true,
            done: true,
            userOwner: true,
            owner: {
                select: {
                    username: true,
                    name: true,
                }
            }
        },
    })

    return
}

export async function findUserProjects(username: string){
 
}