import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const userCore = {
    username: z.string({
        required_error: 'Username é obrigatorio!',
        invalid_type_error: 'Username não é uma string'
    }),
    name: z.string(),
}

const createUserSchema = z.object({
    ...userCore,
    password: z.string({
        required_error: 'Senha é obrigatorio!',
        invalid_type_error: 'Senha não é uma string'
    }),
});

const createUserResponseSchema = z.object({
    id: z.number(),
    ...userCore,
});

const loginSchema = z.object({
    username: z.string({
        required_error: 'Username é obrigatorio!',
        invalid_type_error: 'Username não é uma string'
    }),
    password: z.string(),
})

const loginResponseSchema = z.object({
    accessToken: z.string(),
})

export type CreateUserInput = z.infer<typeof createUserSchema>
export type LoginInput = z.infer<typeof loginSchema>

export const {schemas: userSchemas, $ref} = buildJsonSchemas({
    createUserSchema,
    createUserResponseSchema,
    loginSchema,
    loginResponseSchema
})