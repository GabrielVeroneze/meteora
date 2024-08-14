import { useObterProdutos } from '@/hooks/useObterProdutos'
import CardProduto from '@/components/CardProduto'
import styles from './Produtos.module.scss'

const Produtos = () => {
    const { produtos } = useObterProdutos()

    return (
        <section className={styles.produtos}>
            <h3 className={styles.titulo}>Produtos que estão bombando!</h3>
            <ul className={styles.lista}>
                {produtos.map(produto => (
                    <CardProduto key={produto.id} produto={produto} />
                ))}
            </ul>
        </section>
    )
}

export default Produtos
