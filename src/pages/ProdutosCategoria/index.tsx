import { useProdutosPorCategoria } from '@/hooks/useProdutosPorCategoria'
import CardProduto from '@/components/CardProduto'
import styles from './ProdutosCategoria.module.scss'

const ProdutosCategoria = () => {
    const { produtos, categoria } = useProdutosPorCategoria()

    return (
        <main className={styles.principal}>
            {produtos.length ? (
                <>
                    <h1 className={styles.titulo}>Produtos em {categoria}</h1>
                    <ul className={styles.lista}>
                        {produtos.map(produto => (
                            <CardProduto key={produto.id} produto={produto} />
                        ))}
                    </ul>
                </>
            ) : (
                <p className={styles.texto}>
                    Nenhum produto encontrado para a categoria "{categoria}".
                </p>
            )}
        </main>
    )
}

export default ProdutosCategoria