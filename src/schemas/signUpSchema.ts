import {z} from 'zod'


export const usernameValidation = z
    .string()
    .min(2,'Username too short.')
    .max(20,'Username too large.')
    .regex(/^[a-zA-Z0-9_]+$/,'Username should not contain special characters.')

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message:'Invalid email address.'}),
    password: z.string().min(6, {message:'Password too short.'})
})