import Botao from '@/components/Botao'
import styles from './Newsletter.module.scss'

const Newsletter = () => {
    return (
        <section className={styles.secao}>
            <p className={styles.texto}>
                Quer receber nossas novidades, promoções exclusivas e 10% OFF na
                primeira compra? Cadastre-se!
            </p>
            <div className={styles.campo}>
                <input
                    className={styles.entrada}
                    type="email"
                    placeholder="Digite seu email"
                />
                <Botao>Enviar</Botao>
            </div>
        </section>
    )
}

export default Newsletter
