import { formatarPrecoEmReal } from '@/utilities/formatarPreco'
import styles from './ModalProdutoInfo.module.scss'

interface ModalProdutoInfoProps {
    imagem: string
    alt: string
    nome: string
    descricao: string
    preco: number
    fornecedor: string
}

const ModalProdutoInfo = ({
    imagem,
    alt,
    nome,
    descricao,
    preco,
    fornecedor,
}: ModalProdutoInfoProps) => {
    return (
        <div className={styles.info}>
            <img className={styles.imagem} src={imagem} alt={alt} />
            <h5 className={styles.nome}>{nome}</h5>
            <p className={styles.descricao}>{descricao}</p>
            <p className={styles.preco}>
                <strong>{formatarPrecoEmReal(preco)}</strong>
            </p>
            <p className={styles.fornecedor}>{fornecedor}</p>
        </div>
    )
}

export default ModalProdutoInfo
