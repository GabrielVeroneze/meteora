import styles from './Banner.module.scss'

interface BannerProps {
    children: React.ReactNode
    imagemFundo: string
}

const Banner = ({ children, imagemFundo }: BannerProps) => {
    return (
        <div
            className={styles.banner}
            style={{ backgroundImage: `url(${imagemFundo})` }}
        >
            {children}
        </div>
    )
}

export default Banner
