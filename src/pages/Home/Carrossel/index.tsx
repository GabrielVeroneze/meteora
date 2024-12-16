import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'
import banners from '@/data/banners.json'
import Banner from './Banner'
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
                {banners.map(banner => (
                    <SwiperSlide key={banner.id}>
                        <Banner imagem={banner.imagem}>
                            {banner.conteudo}
                        </Banner>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Carrossel
