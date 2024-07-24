import { Link } from 'react-router-dom'
import styles from './CardCategoria.module.scss'

interface CardCategoriaProps {
    to: string
    nome: string
    imagem: string
    descricao: string
}

const CardCategoria = ({ to, nome, imagem, descricao }: CardCategoriaProps) => {
    return (
        <Link className={styles.card} to={to}>
            <img className={styles.imagem} src={imagem} alt={descricao} />
            <h5 className={styles.titulo}>{nome}</h5>
        </Link>
    )
}

export default CardCategoria
