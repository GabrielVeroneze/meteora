import logo from '@/assets/images/logo-clara-com-texto.png'
import styles from './Carrossel.module.scss'

const Carrossel = () => {
    return (
        <section className={styles.carrossel}>
            <div className={styles.slide}>
                <div className={styles.conteudo}>
                    <img
                        className={styles.imagem}
                        src={logo}
                        alt="Logotipo da Meteora"
                    />
                </div>
            </div>
        </section>
    )
}

export default Carrossel
