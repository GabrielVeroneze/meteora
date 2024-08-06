import { formatarPrecoEmReal } from '@/utilities/formatarPreco'
import { IProduto } from '@/types/IProduto'
import Botao from '@/components/Botao'
import styles from './CardProduto.module.scss'

interface CardProdutoProps {
    produto: IProduto
    onVerMais: (produto: IProduto) => void
}

const CardProduto = ({ produto, onVerMais }: CardProdutoProps) => {
    const { imagem, alt, nome, descricao, preco } = produto

    return (
        <li className={styles.card}>
            <img className={styles.imagem} src={imagem} alt={alt} />
            <div className={styles.info}>
                <h5 className={styles.nome}>{nome}</h5>
                <p className={styles.descricao}>{descricao}</p>
                <p className={styles.preco}>
                    <strong>{formatarPrecoEmReal(preco)}</strong>
                </p>
                <Botao onClick={() => onVerMais(produto)}>Ver mais</Botao>
            </div>
        </li>
    )
}

export default CardProduto
