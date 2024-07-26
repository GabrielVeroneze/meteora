import styles from './CardProduto.module.scss'

interface CardProdutoProps {
    imagem: string
    nome: string
    descricao: string
    preco: number
}

const CardProduto = ({ imagem, nome, descricao, preco }: CardProdutoProps) => {
    return (
        <li className={styles.card}>
            <img className={styles.imagem} src={imagem} />
            <div className={styles.conteudo}>
                <h5 className={styles.nome}>{nome}</h5>
                <p className={styles.descricao}>{descricao}</p>
                <p className={styles.preco}>
                    <strong>{preco}</strong>
                </p>
                <button className={styles.botao}>Ver mais</button>
            </div>
        </li>
    )
}

export default CardProduto
