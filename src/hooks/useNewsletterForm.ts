import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { newsletterSchema, NewsletterSchemaType } from '@/schemas/newsletterSchema'

export const useNewsletterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<NewsletterSchemaType>({
        mode: 'onTouched',
        resolver: zodResolver(newsletterSchema),
    })

    const cadastrar = (dados: NewsletterSchemaType) => {
        console.log(dados)
    }

    return {
        register,
        handleSubmit,
        errors,
        cadastrar,
    }
}
