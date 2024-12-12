import { useModalProduto } from '@/context/modalProduto/useModalProduto'
import { formatarPrecoEmReal } from '@/utilities/formatarPreco'
import { Produto } from '@/types/Produto'
import Botao from '@/components/Botao'
import styles from './CardProduto.module.scss'

interface CardProdutoProps {
    produto: Produto
}

const CardProduto = ({ produto }: CardProdutoProps) => {
    const { imagem, alt, nome, descricao, preco } = produto
    const { abrirModal } = useModalProduto()

    return (
        <li className={styles.card}>
            <img className={styles.imagem} src={imagem} alt={alt} />
            <div className={styles.info}>
                <h5 className={styles.nome}>{nome}</h5>
                <p className={styles.descricao}>{descricao}</p>
                <p className={styles.preco}>
                    <strong>{formatarPrecoEmReal(preco)}</strong>
                </p>
                <Botao onClick={() => abrirModal(produto)}>Ver mais</Botao>
            </div>
        </li>
    )
}

export default CardProduto
