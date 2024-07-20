import styles from './Banner.module.scss'

interface BannerProps {
    conteudo: 'texto' | 'imagem'
    titulo?: string
    texto?: string
    imagem?: string
    alt?: string
}

const Banner = ({ conteudo, titulo, texto, imagem, alt }: BannerProps) => {
    return (
        <div className={styles.banner}>
            {conteudo === 'texto' && (
                <div className={styles.conteudoTexto}>
                    <h1 className={styles.titulo}>{titulo}</h1>
                    <p className={styles.texto}>{texto}</p>
                </div>
            )}
            {conteudo === 'imagem' && (
                <div className={styles.conteudoImagem}>
                    <img className={styles.imagem} src={imagem} alt={alt} />
                </div>
            )}
        </div>
    )
}

export default Banner
