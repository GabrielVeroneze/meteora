import { useNewsletterForm } from '@/hooks/useNewsletterForm'
import Botao from '@/components/Botao'
import MensagemErro from '@/components/MensagemErro'
import styles from './Newsletter.module.scss'

const Newsletter = () => {
    const { register, handleSubmit, errors, cadastrar } = useNewsletterForm()

    return (
        <section className={styles.secao}>
            <p className={styles.texto}>
                Quer receber nossas novidades, promoções exclusivas e 10% OFF na
                primeira compra? Cadastre-se!
            </p>
            <form
                className={styles.campo}
                onSubmit={handleSubmit(cadastrar)}
            >
                <input
                    className={styles.entrada}
                    type="email"
                    placeholder="Digite seu email"
                    {...register('email')}
                />
                <Botao>Enviar</Botao>
            </form>
            {errors.email && (
                <MensagemErro>{errors.email.message}</MensagemErro>
            )}
        </section>
    )
}

export default Newsletter
