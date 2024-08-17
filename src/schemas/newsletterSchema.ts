import { z } from 'zod'

export const newsletterSchema = z.object({
    email: z
        .string()
        .min(1, { message: 'O campo email é obrigatório.' })
        .email({ message: 'Insira um endereço de email válido.' }),
})

export type NewsletterSchemaType = z.infer<typeof newsletterSchema>
