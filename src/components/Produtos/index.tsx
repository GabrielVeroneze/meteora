import { useState } from 'react'
import { IProduto } from '@/types/IProduto'
import CardProduto from './CardProduto'
import ModalProduto from '@/components/ModalProduto'
import produtos from '@/data/produtos.json'
import styles from './Produtos.module.scss'

const Produtos = () => {
    const [modalEstaAberto, setModalEstaAberto] = useState<boolean>(false)
    const [produtoSelecionado, setProdutoSelecionado] = useState<IProduto | null>(null)

    const handleAbrirModal = (produto: IProduto) => {
        setModalEstaAberto(true)
        setProdutoSelecionado(produto)
    }

    const handleFecharModal = () => {
        setModalEstaAberto(false)
    }

    return (
        <section className={styles.produtos}>
            <h3 className={styles.titulo}>Produtos que estão bombando!</h3>
            <ul className={styles.lista}>
                {produtos.map(produto => (
                    <CardProduto
                        key={produto.id}
                        produto={produto}
                        onVerMais={handleAbrirModal}
                    />
                ))}
            </ul>
            <ModalProduto
                produto={produtoSelecionado}
                estaAberto={modalEstaAberto}
                onFechar={handleFecharModal}
            />
        </section>
    )
}

export default Produtos
