import { hashpasswordword } from "../../utils/hash";
import prisma from "../../utils/prisma";
import { CreateUserInput } from "./user.schema";

export async function createUser(input: CreateUserInput){

    const {password, ...rest} = input;

    const {hash, hashpassword} = hashpasswordword(password)

    const user = await prisma.user.create({
        data: {...rest, hashpassword, password: hash},
    });

    return user;

}

export async function findUserByUsername(username: string){
    return prisma.user.findUnique({
        where: {
            username,
        }
    })
}

export async function findUsers() {
    return prisma.user.findMany({
        select: {
            username: true,
            name: true,
            id: true
        }
    });
}