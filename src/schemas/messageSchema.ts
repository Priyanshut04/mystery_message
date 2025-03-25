import {z} from 'zod'

export const messageSchema = z.object({
    content: z
        .string()
        .min(10, {message: 'Content too short'})
        .max(300, {message:'Content too large'})
})