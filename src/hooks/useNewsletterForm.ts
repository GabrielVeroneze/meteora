import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { newsletterSchema, NewsletterSchemaType } from '@/schemas/newsletterSchema'
import { useModalNewsletter } from '@/context/modalNewsletter/useModalNewsletter'

export const useNewsletterForm = () => {
    const { abrirModal } = useModalNewsletter()

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
        abrirModal()
    }

    return {
        register,
        handleSubmit,
        errors,
        cadastrar,
    }
}
