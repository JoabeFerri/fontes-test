import {z} from 'zod';
import {buildJsonSchemas} from 'fastify-zod';

const projectInput = {
    title: z.string(),
    zipCode: z.string(),
    cost: z.number(),
}
const projectGenerated = {
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    done: z.boolean()

}

const createProjectSchema = z.object({
    ...projectInput,
})

const projectResponseSchema = z.object({
    ...projectInput,
    ...projectGenerated
})

const projectsResponseSchema = z.array(projectResponseSchema)

export type CreateProjectInput = z.infer<typeof createProjectSchema>

export const {schemas: projectSchemas, $ref} = buildJsonSchemas({
    createProjectSchema,
    projectResponseSchema,
    projectsResponseSchema,
},{$id: 'Project'})

