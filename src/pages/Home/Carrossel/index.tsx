import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'
import { banners } from '@/assets/images/carrossel'
import Banner from './Banner'
import logo from '@/assets/images/logo-clara-com-texto.png'
import styles from './Carrossel.module.scss'

const Carrossel = () => {
    return (
        <section className={styles.carrossel}>
            <Swiper
                slidesPerView={1}
                modules={[Navigation, Pagination, A11y, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
            >
                <SwiperSlide>
                    <Banner imagem={banners.impactoPositivo}>
                        <img src={logo} alt="Logotipo da Meteora" />
                    </Banner>
                </SwiperSlide>
                <SwiperSlide>
                    <Banner imagem={banners.estiloQualidade}>
                        <h1>Coleção Atemporal</h1>
                        <p>Estilo e qualidade para durar.</p>
                    </Banner>
                </SwiperSlide>
                <SwiperSlide>
                    <Banner imagem={banners.impactoVisual}>
                        <h1>Coleção Atemporal</h1>
                        <p>Alto impacto visual, baixo impacto ambiental.</p>
                    </Banner>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Carrossel
