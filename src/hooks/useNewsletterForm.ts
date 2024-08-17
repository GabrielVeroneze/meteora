import { useForm } from 'react-hook-form'

export const useNewsletterForm = () => {
    const { register, handleSubmit } = useForm({ mode: 'onTouched' })

    const cadastrar = (dados) => {
        console.log(dados)
    }

    return {
        register,
        handleSubmit,
        cadastrar,
    }
}
