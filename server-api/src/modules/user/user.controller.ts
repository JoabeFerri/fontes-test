import fastify, { FastifyReply, FastifyRequest } from "fastify";
import { server } from "../../app";
import { verifyPasswrod } from "../../utils/hash";
import { CreateUserInput, LoginInput } from "./user.schema";
import { createUser, findUserByUsername, findUsers } from "./user.service";

export async function registerUserHandler(
    request: FastifyRequest<{
        Body: CreateUserInput;
    }>,
    reply: FastifyReply
    ) {

        const body = request.body
        // console.log({ body });

        try {
            const user = await createUser(body)

            return reply.code(201).send(user)
        } catch (e) {
            console.log(e)
            return reply.code(500).send(e)
        }
    }

export async function loginHandler(request: FastifyRequest<{
    Body: LoginInput;
}>, 
reply: FastifyReply
){
    const body = request.body

    // procurando o usuario pelo username
    const user = await findUserByUsername(body.username)

    if(!user){
        return reply.code(401).send({
            message: 'Email ou senha invalidos'
        })
    }

    // verificando a senha
    const correctPassword = verifyPasswrod({
        candidatePassword: body.password,
        hashpassword: user.hashpassword,
        hash: user.password
    })
    // gerando token de acesso
    if(correctPassword){
        const {password, hashpassword, ...rest} = user

        return {accessToken: server.jwt.sign(rest)}
    }
    return reply.code(401).send({
        message: 'Email ou senha invalidos'
    })


}

export async function getUsersHandler() {
    const users = await findUsers()

    return users
}