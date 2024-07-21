import Banner from './Banner'
import banner1 from '@/assets/images/carrossel/banner-mobile-1.png'
import banner2 from '@/assets/images/carrossel/banner-mobile-2.png'
import logo from '@/assets/images/logo-clara-com-texto.png'
import styles from './Carrossel.module.scss'

const Carrossel = () => {
    return (
        <section className={styles.carrossel}>
            <Banner imagemFundo={banner1}>
                <img src={logo} alt="Logotipo da Meteora" />
            </Banner>
            <Banner imagemFundo={banner2}>
                <h1>Coleção Atemporal</h1>
                <p>Estilo e qualidade para durar.</p>
            </Banner>
        </section>
    )
}

export default Carrossel
