import CardProduto from './CardProduto'
import produtos from '@/data/produtos.json'
import styles from './Produtos.module.scss'

const Produtos = () => {
    return (
        <section className={styles.produtos}>
            <h3 className={styles.titulo}>Produtos que estão bombando!</h3>
            <ul className={styles.lista}>
                {produtos.map(produto => (
                    <CardProduto key={produto.id} {...produto} />
                ))}
            </ul>
        </section>
    )
}

export default Produtos
