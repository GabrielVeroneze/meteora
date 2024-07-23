import { banners } from '@/assets/images/carrossel'
import Banner from './Banner'
import logo from '@/assets/images/logo-clara-com-texto.png'
import styles from './Carrossel.module.scss'

const Carrossel = () => {
    return (
        <section className={styles.carrossel}>
            <Banner imagem={banners.impactoPositivo}>
                <img src={logo} alt="Logotipo da Meteora" />
            </Banner>
            <Banner imagem={banners.estiloQualidade}>
                <h1>Coleção Atemporal</h1>
                <p>Estilo e qualidade para durar.</p>
            </Banner>
            <Banner imagem={banners.impactoVisual}>
                <h1>Coleção Atemporal</h1>
                <p>Alto impacto visual, baixo impacto ambiental.</p>
            </Banner>
        </section>
    )
}

export default Carrossel
