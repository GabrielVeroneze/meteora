import { Link } from 'react-router-dom'
import styles from './CardCategoria.module.scss'

interface CardCategoriaProps {
    nome: string
    link: string
    imagem: string
    descricao: string
}

const CardCategoria = ({ nome, link, imagem, descricao }: CardCategoriaProps) => {
    return (
        <Link className={styles.card} to={link}>
            <img
                className={styles.imagem}
                src={imagem}
                alt={descricao}
            />
            <h5 className={styles.titulo}>{nome}</h5>
        </Link>
    )
}

export default CardCategoria
