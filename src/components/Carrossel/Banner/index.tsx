import styles from './Banner.module.scss'

interface BannerProps {
    children: React.ReactNode
    imagem: {
        mobile: string
        tablet: string
        alt: string
    }
}

const Banner = ({ children, imagem }: BannerProps) => {
    return (
        <div className={styles.banner}>
            <picture className={styles.picture}>
                <source srcSet={imagem.tablet} media="(min-width: 768px)" />
                <img
                    className={styles.imagem}
                    src={imagem.mobile}
                    alt={imagem.alt}
                />
            </picture>
            <div className={styles.conteudo}>{children}</div>
        </div>
    )
}

export default Banner
