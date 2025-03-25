import {z} from 'zod'

export const verifySchema = z.object({
    code: z.string().length(6, {message: 'verification code length msut be 6 digits'})
})