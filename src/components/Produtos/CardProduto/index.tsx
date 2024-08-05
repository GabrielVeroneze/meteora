import { formatarPrecoEmReal } from '@/utilities/formatarPreco'
import Botao from '@/components/Botao'
import styles from './CardProduto.module.scss'

interface CardProdutoProps {
    imagem: string
    alt: string
    nome: string
    descricao: string
    preco: number
    onVerMais: () => void
}

const CardProduto = ({ imagem, alt, nome, descricao, preco, onVerMais }: CardProdutoProps) => {
    return (
        <li className={styles.card}>
            <img className={styles.imagem} src={imagem} alt={alt} />
            <div className={styles.info}>
                <h5 className={styles.nome}>{nome}</h5>
                <p className={styles.descricao}>{descricao}</p>
                <p className={styles.preco}>
                    <strong>{formatarPrecoEmReal(preco)}</strong>
                </p>
                <Botao onClick={onVerMais}>Ver mais</Botao>
            </div>
        </li>
    )
}

export default CardProduto
