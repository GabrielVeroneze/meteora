import { formatarPrecoEmReal } from '@/utilities/formatarPreco'
import { ProdutoInfo } from '@/types/ProdutoInfo'
import styles from './ModalProdutoInfo.module.scss'

const ModalProdutoInfo = ({
    nome,
    descricao,
    preco,
    fornecedor,
}: ProdutoInfo) => {
    return (
        <div className={styles.info}>
            <h5 className={styles.nome}>{nome}</h5>
            <p className={styles.descricao}>{descricao}</p>
            <p className={styles.preco}>
                <strong>{formatarPrecoEmReal(preco)}</strong>
            </p>
            <p className={styles.fornecedor}>
                Vendido e entregue por {fornecedor}
            </p>
        </div>
    )
}

export default ModalProdutoInfo
