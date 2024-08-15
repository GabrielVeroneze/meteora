import { usePesquisarPorProdutos } from '@/hooks/usePesquisarPorProdutos'
import CardProduto from '@/components/CardProduto'
import styles from './ResultadosPesquisa.module.scss'

const ResultadosPesquisa = () => {
    const { produtos } = usePesquisarPorProdutos()

    return (
        <main className={styles.principal}>
            <h1 className={styles.titulo}>Resultados da Busca</h1>
            {produtos.length ? (
                <ul className={styles.lista}>
                    {produtos.map(produto => (
                        <CardProduto key={produto.id} produto={produto} />
                    ))}
                </ul>
            ) : (
                <p className={styles.texto}>Nenhum produto encontrado.</p>
            )}
        </main>
    )
}

export default ResultadosPesquisa
