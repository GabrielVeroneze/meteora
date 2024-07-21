import Banner from './Banner'
import banner1 from '@/assets/images/carrossel/banner-mobile-1.png'
import logo from '@/assets/images/logo-clara-com-texto.png'
import styles from './Carrossel.module.scss'

const Carrossel = () => {
    return (
        <section className={styles.carrossel}>
            <Banner imagemFundo={banner1}>
                <img src={logo} alt="Logotipo da Meteora" />
            </Banner>
        </section>
    )
}

export default Carrossel
