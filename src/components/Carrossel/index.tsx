import Banner from './Banner'
import logo from '@/assets/images/logo-clara-com-texto.png'
import styles from './Carrossel.module.scss'

const Carrossel = () => {
    return (
        <section className={styles.carrossel}>
            <Banner
                conteudo="imagem"
                imagem={logo}
                alt="Logotipo da Meteora"
            />
        </section>
    )
}

export default Carrossel
