import parse from 'html-react-parser'
import styles from './Banner.module.scss'

interface BannerProps {
    children: string
    imagem: {
        mobile: string
        tablet: string
        desktop: string
        alt: string
    }
}

const Banner = ({ children, imagem }: BannerProps) => {
    return (
        <div className={styles.banner}>
            <picture className={styles.picture}>
                <source srcSet={imagem.desktop} media="(min-width: 1440px)" />
                <source srcSet={imagem.tablet} media="(min-width: 768px)" />
                <img
                    className={styles.imagem}
                    src={imagem.mobile}
                    alt={imagem.alt}
                />
            </picture>
            <div className={styles.conteudo}>{parse(children)}</div>
        </div>
    )
}

export default Banner
